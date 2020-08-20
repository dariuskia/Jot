// export default async function getSentiment() {
// 	const {
// 		TextAnalyticsClient,
// 		AzureKeyCredential,
// 	} = require('@azure/ai-text-analytics')
// 	const key = '7d9c38db6a7f4c39b9e4448134031db4'
// 	const endpoint = 'https://jotsentimentanalysis.cognitiveservices.azure.com/'

// 	const textAnalyticsClient = new TextAnalyticsClient(
// 		endpoint,
// 		new AzureKeyCredential(key)
// 	)

// 	async function sentimentAnalysis(
// 		sentimentInput,
// 		client = textAnalyticsClient
// 	) {
// 		let output = { avg: null, highest: null }

// 		sentimentInput = sentimentInput.filter((msg) => msg.user.name != 'Jot')
// 		const input = sentimentInput.map((msg) => msg.text)
// 		const sentimentResult = await client.analyzeSentiment(input)

// 		let total = 0
// 		let numItems = sentimentInput.length

// 		sentimentResult.forEach((document, ind) => {
// 			let [pos, neu, neg] = [
// 				document.confidenceScores.positive,
// 				document.confidenceScores.neutral,
// 				document.confidenceScores.negative,
// 			]

// 			let val = 0.5 * (1 + pos - neg)
// 			sentimentInput[ind].sentiment = val
// 			total += val
// 			console.log(val)

// 			if (output.highest == null) {
// 				output.highest = sentimentInput[ind]
// 			} else {
// 				if (val > output.highest.sentiment) {
// 					output.highest = sentimentInput[ind]
// 				} else if (val == output.highest.sentiment) {
// 					if (input[ind].length > output.highest.text.length) {
// 						output.highest = sentimentInput[ind]
// 					}
// 				}
// 			}
// 		})
// 		output.avg = total / numItems

// 		return output
// 	}
// 	let documents = [
// 		{
// 			text: "I'm so happy",
// 			user: { _id: 1, name: 'anothertest' },
// 			createdAt: '2020-08-15T19:42:12.516Z',
// 			_id: 'd5f23b91-cddd-4c6d-893b-3cd16598581b',
// 		},
// 		{
// 			text: 'anothe rtest efheh',
// 			user: { _id: 1, name: 'anothertest' },
// 			createdAt: '2020-08-15T19:39:57.684Z',
// 			_id: 'e77e31b0-56e3-4552-a114-485725c2dfe7',
// 		},
// 		{
// 			text: 'waht the',
// 			user: { _id: 1, name: 'anothertest' },
// 			createdAt: '2020-08-15T19:36:25.966Z',
// 			_id: '2aecb7b2-3ab3-4234-a09b-a2d6f579694e',
// 		},
// 		{
// 			text: 'hi there',
// 			user: { _id: 1, name: 'Darius' },
// 			createdAt: '2020-08-15T17:11:40.400Z',
// 			_id: '6bb82961-fe2b-4ef4-8fee-eb76c6bff183',
// 		},
// 		{
// 			_id: 1,
// 			text: 'Hi there! Type some messages to get started.',
// 			user: { _id: 2, name: 'Jot' },
// 			createdAt: '2020-08-15T17:10:47.536Z',
// 		},
// 	]
// 	let val = await sentimentAnalysis(documents)
// 	console.log(val)
// }

export default function sentimentAnalysis(data) {
	const fetch = require('node-fetch')

	const url =
		'https://jotsentimentanalysis.cognitiveservices.azure.com/text/analytics/v3.0/sentiment'
	const key = '7d9c38db6a7f4c39b9e4448134031db4'

	let sentimentInput

	function parseInput(input) {
		input = input.filter((msg) => msg.user.name != 'Jot')
		input = input.map((item) => ({ id: item['_id'], text: item.text }))
		sentimentInput = input
		return JSON.stringify({ documents: input })
	}

	function response_handler(res) {
		let output = { avg: null, highest: null }
		let total = 0
		let numItems = sentimentInput.length
		res = res.documents
		res.forEach((document, ind) => {
			let [pos, neu, neg] = [
				document.confidenceScores.positive,
				document.confidenceScores.neutral,
				document.confidenceScores.negative,
			]

			// console.log(pos, neu, neg)
			let val = 0.5 * (1 + pos - neg)
			sentimentInput[ind].sentiment = val
			total += val
			// console.log(val)

			if (output.highest == null) {
				output.highest = sentimentInput[ind]
			} else {
				if (val > output.highest.sentiment) {
					output.highest = sentimentInput[ind]
				} else if (val == output.highest.sentiment) {
					if (sentimentInput[ind].text.length > output.highest.text.length) {
						output.highest = sentimentInput[ind]
					}
				}
			}
		})
		output.avg = total / numItems

		return output
	}

	const params = {
		headers: {
			'Content-type': 'application/json',
			'Ocp-Apim-Subscription-Key': key,
		},
		method: 'POST',
		body: parseInput(data),
	}

	return fetch(url, params)
		.then((data) => data.json())
		.then((res) => response_handler(res))
		.catch((error) => console.log(error))
}

let res = [
	{
		id: 'd5f23b91-cddd-4c6d-893b-3cd16598581b',
		sentiment: 'positive',
		confidenceScores: { positive: 1, neutral: 0, negative: 0 },
		sentences: [
			{
				sentiment: 'positive',
				confidenceScores: { positive: 1, neutral: 0, negative: 0 },
				offset: 0,
				length: 19,
				text: "I think you're cool",
			},
		],
		warnings: [],
	},
	{
		id: 'e77e31b0-56e3-4552-a114-485725c2dfe7',
		sentiment: 'positive',
		confidenceScores: { positive: 1, neutral: 0, negative: 0 },
		sentences: [
			{
				sentiment: 'positive',
				confidenceScores: { positive: 1, neutral: 0, negative: 0 },
				offset: 0,
				length: 32,
				text: "I think you're really super cool",
			},
		],
		warnings: [],
	},
	{
		id: '2aecb7b2-3ab3-4234-a09b-a2d6f579694e',
		sentiment: 'negative',
		confidenceScores: { positive: 0, neutral: 0, negative: 1 },
		sentences: [
			{
				sentiment: 'negative',
				confidenceScores: { positive: 0, neutral: 0, negative: 1 },
				offset: 0,
				length: 8,
				text: 'hate you',
			},
		],
		warnings: [],
	},
	{
		id: '6bb82961-fe2b-4ef4-8fee-eb76c6bff183',
		sentiment: 'neutral',
		confidenceScores: { positive: 0.01, neutral: 0.99, negative: 0 },
		sentences: [
			{
				sentiment: 'neutral',
				confidenceScores: { positive: 0.01, neutral: 0.99, negative: 0 },
				offset: 0,
				length: 8,
				text: 'hi there',
			},
		],
		warnings: [],
	},
]

let sentimentInput = [
	{ id: 'd5f23b91-cddd-4c6d-893b-3cd16598581b', text: "I think you're cool" },
	{
		id: 'e77e31b0-56e3-4552-a114-485725c2dfe7',
		text: "I think you're really super cool",
	},
	{ id: '2aecb7b2-3ab3-4234-a09b-a2d6f579694e', text: 'hate you' },
	{ id: '6bb82961-fe2b-4ef4-8fee-eb76c6bff183', text: 'hi there' },
]
