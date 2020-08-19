import React from 'react'
import { View, Text } from 'react-native'
import styles from './StylesHighlight'
import MessageVector from '../../../../assets/img/highlight/messagevector.svg'

export default function Highlight() {
	return (
		<View style={styles.container}>
			<View style={[styles.innerContainer, { alignItems: 'center' }]}>
				<Text style={styles.timestamp}>
					<Text style={{ fontWeight: 'bold' }}>Monday</Text> 9:01 PM
				</Text>
			</View>
			<View style={[styles.innerContainer, { alignItems: 'flex-end' }]}>
				<View style={styles.bubble}>
					<Text style={styles.text}>
						Lorem ipsum dolor sit amet consectetur
					</Text>
				</View>
				<View>
					<MessageVector style={styles.vector} />
				</View>
			</View>
		</View>
	)
}
