export default function genResponse(question) {
	const fetch = require('node-fetch')

	const url =
		'https://jotchatbot.azurewebsites.net/qnamaker/knowledgebases/4d81dfc1-d924-4170-8015-8a542fe15852/generateAnswer'

	const data = {
		question: question,
	}

	const params = {
		headers: {
			'Content-type': 'application/json',
			Authorization: 'EndpointKey 1b2ed108-ebdb-433d-aef5-9267acd31bd9',
		},
		method: 'POST',
		body: JSON.stringify(data),
	}

	return fetch(url, params)
		.then((data) => data.json())
		.then((res) => res.answers[0].answer)
		.catch((error) => console.log(error))
}
