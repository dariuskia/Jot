import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './StyleCard'
import One from '../../../../../assets/img/moods/1.svg'
import Two from '../../../../../assets/img/moods/2.svg'
import Three from '../../../../../assets/img/moods/3.svg'
import Four from '../../../../../assets/img/moods/4.svg'
import Five from '../../../../../assets/img/moods/5.svg'
import Question from '../../../../../assets/img/moods/question.svg'

export const Emoji = ({ mood }) => {
	const size = 30
	let ret = (() => {
		switch (mood) {
			case 0:
				return <One width={size} height={size} />
			case 1:
				return <One width={size} height={size} />
			case 2:
				return <Two width={size} height={size} />
			case 3:
				return <Three width={size} height={size} />
			case 4:
				return <Four width={size} height={size} />
			case 5:
				return <Five width={size} height={size} />
			default:
				return <Question width={size} height={size} />
		}
	})()
	return ret
}

export default function Card({ day, mood }) {
	const ss = styles(mood)
	return (
		<View style={ss.container}>
			<Emoji mood={mood} />
			<Text style={ss.text}>{day}</Text>
		</View>
	)
}
