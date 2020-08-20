export default function genResponse(question) {
	const fetch = require('node-fetch')

	const url =
		'https://jotmessagingbot.azurewebsites.net/qnamaker/knowledgebases/35b88baf-7111-48b0-ad0d-5f43da33bb2f/generateAnswer'

	const data = {
		question: question,
	}

	const params = {
		headers: {
			'Content-type': 'application/json',
			Authorization: 'EndpointKey d9b74b19-567b-46e2-ad70-e5bb95a669cc',
		},
		method: 'POST',
		body: JSON.stringify(data),
	}

	return fetch(url, params)
		.then((data) => data.json())
		.then((res) => res.answers[0].answer)
		.catch((error) => console.log(error))
}
