import React from 'react'
import { View, Button, Text, Image, TouchableOpacity } from 'react-native'
import styles from './StylesLandingPage.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import CarouselFirst from '../../../assets/img/carousel3.svg'

export default function LandingPage({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.headingContainer}>
				<Text style={styles.header}>Jot</Text>
				<Text style={styles.subheading}>
					The journaling companion designed for everybody.
				</Text>
			</View>
			<View style={styles.carouselContainer}>
				<CarouselFirst width={270} height={220} />
				<Text style={styles.carouselText}>
					Write entries in a friendly chat interface.
				</Text>
				<View style={styles.carotuselButtons}></View>
			</View>
			<View style={styles.contContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<View style={styles.contButton}>
						<Text style={styles.contText}>Continue</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}
