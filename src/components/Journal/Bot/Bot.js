export default function genResponse(question) {
	const fetch = require('node-fetch')

	const url =
		'https://jotchatbot.azurewebsites.net/qnamaker/knowledgebases/5de52b51-0039-4283-a11e-501d4ea233a1/generateAnswer'

	const data = {
		question: question,
	}

	const params = {
		headers: {
			'Content-type': 'application/json',
			Authorization: 'EndpointKey 22cd3735-7846-4a41-ab2e-bbe208a45924',
		},
		method: 'POST',
		body: JSON.stringify(data),
	}

	return fetch(url, params)
		.then((data) => data.json())
		.then((res) => res.answers[0].answer)
		.catch((error) => console.log(error))
}
