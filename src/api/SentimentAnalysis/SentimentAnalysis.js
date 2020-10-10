export function sentimentAnalysis(message) {
	const fetch = require('node-fetch')

	const url =
		'https://jotsentiment.cognitiveservices.azure.com/text/analytics/v3.0/sentiment'
	const key = 'b0fdbe860c034a24858519335482e3e9'

	function parseInput(input) {
		input = { id: input['_id'], text: input.text }
		return JSON.stringify({ documents: [input] })
	}

	function response_handler(res) {
		res = res.documents
		document = res[0]
		let [pos, neg] = [
			document.confidenceScores.positive,
			document.confidenceScores.negative,
		]

		// console.log(pos, neu, neg)
		let val = 0.5 * (1 + pos - neg)
		return parseFloat(val.toFixed(2))
	}

	const params = {
		headers: {
			'Content-type': 'application/json',
			'Ocp-Apim-Subscription-Key': key,
		},
		method: 'POST',
		body: parseInput(message),
	}

	return fetch(url, params)
		.then((data) => data.json())
		.then((res) => response_handler(res))
		.catch((error) => console.log(error))
}
