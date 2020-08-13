import React from 'react'
import {
	View,
	Button,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native'
import styles from './StylesLoginPage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Arrow from '../../../../assets/img/landingarrow.svg'

function Line() {
	return (
		<View
			style={{
				flex: 1,
				borderBottomColor: 'rgba(255, 255, 255, 0.3)',
				borderBottomWidth: 1,
			}}></View>
	)
}

function LoginButton({ color, text, iconName = null }) {
	return (
		<View style={[styles.loginButton, { backgroundColor: color }]}>
			<View style={{ position: 'absolute', left: 30 }}>
				<Icon name={iconName} color="#fff" size={30} />
			</View>
			<View
				style={{
					flex: 10,
					alignItems: 'center',
				}}>
				<Text style={styles.loginText}>{text}</Text>
			</View>
		</View>
	)
}

export default function LoginWithEmail({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Arrow />
			</TouchableOpacity>
			<View style={styles.header}>
				<Text style={styles.heading}>Sign in</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					underlineColorAndroid="#A2A5BD"
					placeholderTextColor="#A2A5BD"
					secureTextEntry={true}
				/>
				<View style={{ alignItems: 'flex-start' }}>
					<TouchableOpacity
						style={{
							marginLeft: 3,
							paddingTop: 8,
							paddingBottom: 8,
							paddingRight: 8,
						}}>
						<Text style={{ color: 'rgba(162, 165, 189, 0.5)' }}>
							Forgot password?
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<LoginButton color="#5382C8" text="Login" />
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
						marginVertical: 25,
					}}>
					<Line />
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							marginHorizontal: 10,
						}}>
						<Text style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 20 }}>
							Or
						</Text>
					</View>
					<Line />
				</View>
				<TouchableOpacity>
					<LoginButton
						color="#B63F3F"
						iconName="google"
						text="Continue with Google"
					/>
				</TouchableOpacity>
			</View>
			<View
				style={{
					alignItems: 'center',
					marginTop: 10,
					padding: 8,
				}}>
				<TouchableOpacity style={{ padding: 10 }}>
					<Text style={{ color: 'white', fontSize: 15, fontFamily: 'Ubuntu' }}>
						Don't have an account?
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
