import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import sentimentAnalysis from './SentimentAnalysis'

export default function () {
	useEffect(() => {
		const messages = [
			{
				_id: 'r1IrQ1DULe6b6qEr5rtVAMUHDnHazF',
				createdAt: '2020-08-17T16:57:41.312Z',
				text: "I'm glad you told me. What's upsetting you?",
				user: { _id: 2, name: 'Toney Boney' },
			},
			{
				text: 'im thankful for being alive',
				user: { _id: 1, name: 'Tony Boney' },
				createdAt: '2020-08-17T16:57:40.155Z',
				_id: '6cd6478b-15b2-4f79-82cf-93b2520d11a2',
			},
			{
				_id: 'KKqa0hWiWAEOljv8Oa7jRhzQh2RPe8',
				createdAt: '2020-08-17T16:57:33.462Z',
				text: 'What are you thankful for today?',
				user: { _id: 2, name: 'Jot' },
			},
			{
				text: 'ask me a question',
				user: { _id: 1, name: 'Tony Boney' },
				createdAt: '2020-08-17T16:57:33.034Z',
				_id: 'bb6348b9-f7ce-4ff6-8067-021e5d8940ac',
			},
			{
				_id: '9QHt1PnG056rRMRDWlg2T8lZ29EUTW',
				createdAt: '2020-08-17T16:57:24.260Z',
				text: 'Glad I could help.',
				user: { _id: 2, name: 'Jot' },
			},
			{
				text: 'I hate you ',
				user: { _id: 1, name: 'Tony Boney' },
				createdAt: '2020-08-17T16:57:23.804Z',
				_id: '2c7457da-18ea-4e1d-bf51-9776d542e553',
			},
			{
				_id: 'fGqEPrcxMvAmuc99fXFBhuTBnJeZFK',
				createdAt: '2020-08-17T16:57:09.392Z',
				text: 'What are you thankful for today?',
				user: { _id: 2, name: 'Jot' },
			},
			{
				text: 'ask me a question',
				user: { _id: 1, name: 'Tony Boney' },
				createdAt: '2020-08-17T16:57:08.221Z',
				_id: '60538bc8-0738-4a35-b5d2-2c9ffd11876a',
			},
			{
				_id: 'QYEKS7DztZTpH2jpcbE7j8ck0ilaCc',
				createdAt: '2020-08-17T16:57:00.107Z',
				text: "I'm a bot, here to help.",
				user: { _id: 2, name: 'Toney Boney' },
			},
			{
				text: 'are you alive',
				user: { _id: 1, name: 'Tony Boney' },
				createdAt: '2020-08-17T16:56:58.255Z',
				_id: 'e6f995a4-e934-4e96-9d3c-45e3a619a2e1',
			},
			{
				_id: 'Lq2CKJlalQNkpf7xemK9QYyzuMdV1e',
				createdAt: '2020-08-17T16:55:41.500Z',
				text: "Hello there! What's up?",
				user: { _id: 2, name: 'Toney Boney' },
			},
			{
				text: 'hello',
				user: { _id: 1, name: 'Tony Boney' },
				createdAt: '2020-08-17T16:55:36.705Z',
				_id: 'd0a5443c-cd33-43be-9a7b-9e9cc5a0dcc0',
			},
			{
				_id: 1,
				text: 'Hi there! Type some messages to get started.',
				user: { _id: 2, name: 'Toney Boney' },
				createdAt: '2020-08-17T16:48:51.618Z',
			},
		]
		const data = {
			documents: [
				{ id: '1', text: 'This is a document written in English.' },
				{ id: '2', text: 'Hello world, this is some code that I like.' },
				{ id: '3', text: 'This is a document written in English.' },
				{ id: '4', text: 'Hello world, this is some code that I like.' },
				{ id: '5', text: 'This is a document written in English.' },
				{ id: '6', text: 'Hello world, this is some code that I like.' },
				{ id: '7', text: 'This is a document written in English.' },
				{ id: '8', text: 'Hello world, this is some code that I like.' },
				{ id: '9', text: 'This is a document written in English.' },
				{ id: '10', text: 'Hello world, this is some code that I like.' },
				// { id: '11', text: 'This is a document written in English.' },
				// { id: '12', text: 'Hello world, this is some code that I like.' },
				// { id: '13', text: 'This is a document written in English.' },
				// { id: '14', text: 'Hello world, this is some code that I like.' },
				// { id: '15', text: 'This is a document written in English.' },
				// { id: '16', text: 'Hello world, this is some code that I like.' },
				// { id: '17', text: 'This is a document written in English.' },
				// { id: '18', text: 'Hello world, this is some code that I like.' },
				// { id: '19', text: 'This is a document written in English.' },
				// { id: '20', text: 'Hello world, this is some code that I like.' },
				// { id: '21', text: 'This is a document written in English.' },
				// { id: '22', text: 'Hello world, this is some code that I like.' },
			],
		}
		sentimentAnalysis(messages).then((res) => console.log(res))
	}, [])
	return (
		<View>
			<Text>poopie</Text>
		</View>
	)
}
