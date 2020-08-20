'use strict'

const {
	TextAnalyticsClient,
	AzureKeyCredential,
} = require('@azure/ai-text-analytics')
const key = '7d9c38db6a7f4c39b9e4448134031db4'
const endpoint = 'https://jotsentimentanalysis.cognitiveservices.azure.com/'

const textAnalyticsClient = new TextAnalyticsClient(
	endpoint,
	new AzureKeyCredential(key)
)

async function sentimentAnalysis(client, sentimentInput) {
	let output = { avg: null, highest: null }

	sentimentInput = sentimentInput.filter((msg) => msg.user.name != 'Jot')
	const input = sentimentInput.map((msg) => msg.text)
	const sentimentResult = await client.analyzeSentiment(input)

	let total = 0
	let numItems = sentimentInput.length

	sentimentResult.forEach((document, ind) => {
		let [pos, neu, neg] = [
			document.confidenceScores.positive,
			document.confidenceScores.neutral,
			document.confidenceScores.negative,
		]

		let val = 0.5 * (1 + pos - neg)
		sentimentInput[ind].sentiment = val
		total += val
		console.log(val)

		if (output.highest == null) {
			output.highest = sentimentInput[ind]
		} else {
			if (val > output.highest.sentiment) {
				output.highest = sentimentInput[ind]
			} else if (val == output.highest.sentiment) {
				if (input[ind].length > output.highest.text.length) {
					output.highest = sentimentInput[ind]
				}
			}
		}
	})
	output.avg = total / numItems

	return output
}

export default async function getSentiment(input) {
	const value = await sentimentAnalysis(textAnalyticsClient, input)
	return value
}
