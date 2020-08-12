import React from 'react'
import { View, Button, Text, Image, TouchableOpacity } from 'react-native'
import styles from './StylesLandingPage.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import CarouselFirst from '../../../assets/img/carousel1.svg'

function LoginButton({ color, text, iconName }) {
	return (
		<View style={[styles.loginButton, { backgroundColor: color }]}>
			{/* <TouchableOpacity> */}
			<View style={{ position: 'absolute', left: 30 }}>
				<Icon name={iconName} color="#fff" size={30} />
			</View>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
				}}>
				<Text style={styles.loginText}>{text}</Text>
			</View>
			{/* </TouchableOpacity> */}
		</View>
	)
}

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
				<CarouselFirst width={250} height={170} />
				<Text style={styles.carouselText}>
					Write entries in a friendly chat interface.
				</Text>
				<View style={styles.carotuselButtons}></View>
			</View>
			<View style={styles.loginContainer}>
				{/* <Button
					onPress={() => navigation.navigate('Home')}
			o		title="Go to homepage (as default user)"
				/> */}
				{/* <LoginWithEmail /> */}
				<TouchableOpacity
					style={{ flex: 1, marginBottom: 10 }}
					onPress={() => navigation.navigate('Home')}>
					<LoginButton
						color="#5382C8"
						iconName="email"
						text="Login with Email"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ flex: 1 }}>
					<LoginButton
						color="#B63F3F"
						iconName="google"
						text="Continue with Google"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<View>
						<Text style={{ color: '#FFF', fontSize: 18, paddingTop: 10 }}>
							Register an account
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}
