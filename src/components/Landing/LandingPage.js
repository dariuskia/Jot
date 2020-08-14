import React from 'react'
import { View, Button, Text, Image, TouchableOpacity } from 'react-native'
import styles from './StylesLandingPage.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LandingCarousel from './Carousel/LandingCarousel'
import Square from '../../../assets/img/backgroundsquare.svg'

export default function LandingPage({ navigation }) {
	return (
		<View style={styles.container}>
			<Square style={styles.square} />
			<View style={styles.headingContainer}>
				<Text style={styles.header}>Jot</Text>
				<Text style={styles.subheading}>
					The journaling companion designed for everybody.
				</Text>
			</View>
			<View style={styles.carouselContainer}>
				<LandingCarousel />
			</View>
			<View style={styles.contContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Login', {})}>
					<View style={styles.contButton}>
						<Text style={styles.contText}>Continue</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}
