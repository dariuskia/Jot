import React, { useState, useRef, useEffect } from 'react'
import {
	TextInput,
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native'
import styles from './StylesGoals'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../../utils/Colors'

import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

function genID(length = 30) {
	var result = ''
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	var charactersLength = characters.length
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}

export default function Goals() {
	const [storageReceived, alreadyReceived] = useState(false)

	const [goals, setGoals] = useState([])

	const input = React.createRef()

	const getUUID = () => {
		let uuid = auth().currentUser.uid
		return uuid
	}

	const [uuid, setuuid] = useState(getUUID())

	const addGoal = async (txt) => {
		let id = genID()
		let newGoals = [...goals, { body: txt, completed: false, key: id }]
		if (txt.length > 0) {
			setGoals(newGoals)
			updateGoals(newGoals)
			input.current.clear()
		}
		AsyncStorage.setItem('@lastGoalDate-' + uuid, new Date().toDateString())
	}

	const removeGoal = (key) => {
		let newGoals = goals.filter((goal) => goal.key != key)
		setGoals(newGoals)
		updateGoals(newGoals)
	}

	const clearGoals = async () => {
		setGoals([])
		await AsyncStorage.removeItem('@goals-' + uuid)
	}

	const updateGoals = async (listOfGoals) => {
		try {
			await AsyncStorage.setItem('@goals-' + uuid, JSON.stringify(listOfGoals))
		} catch (error) {
			console.log(error)
		}
	}

	const recvGoals = async () => {
		try {
			let listOfGoals = await AsyncStorage.getItem('@goals-' + uuid)
			if (listOfGoals != null) {
				setGoals(JSON.parse(listOfGoals))
			}
			alreadyReceived(true)
		} catch (error) {
			console.log(error)
		}
	}

	const toggleCompleted = async (key) => {
		let inc

		let newGoals = goals.map((goal) => {
			if (goal.key == key) {
				inc = goal.completed ? -1 : 1
				return { body: goal.body, completed: !goal.completed, key: goal.key }
			} else return goal
		})

		setGoals(newGoals)
		updateGoals(newGoals)

		const userRef = firestore().collection('users').doc(uuid)
		const userDoc = await userRef.get()
		if (userDoc.exists) {
			const g = userDoc.data().goals
			await userRef.update({ goals: g + inc })
		} else {
			await userRef.set({
				entries: 0,
				messages: 0,
				avgSentiment: 0,
				goals: 1,
			})
		}
	}

	const runFirst = async () => {
		if (!storageReceived) {
			recvGoals()
			let lastDate = await AsyncStorage.getItem('@lastGoalDate-' + uuid)
			if (lastDate != null)
				if (lastDate != new Date().toDateString()) clearGoals()
		}
	}
	runFirst()

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
			<View style={styles.container}>
				<View>
					<View style={styles.titleContainer}>
						<Text style={styles.heading}>Goals</Text>
						<Text style={styles.numGoals}>
							{goals.length.toString() + ' goals'}
						</Text>
					</View>
				</View>
				<ScrollView>
					<View>
						{goals.length != 0 &&
							goals.map((goal) => {
								let textStyles = [styles.text]
								if (goal.completed)
									textStyles.push({ textDecorationLine: 'line-through' })
								return (
									<View key={goal.key} style={styles.goalContainer}>
										<TouchableOpacity
											key={goal.key}
											style={{
												flex: 1,
												flexDirection: 'row',
												alignItems: 'center',
											}}
											onPress={() => toggleCompleted(goal.key)}>
											<View key={goal.key}>
												<TouchableOpacity
													key={goal.key}
													onPress={() => toggleCompleted(goal.key)}>
													<Icon
														name={
															goal.completed
																? 'checkbox-marked'
																: 'checkbox-blank-outline'
														}
														size={20}
														color={'#8084A4'}
														key={goal.key}
													/>
												</TouchableOpacity>
											</View>
											<Text key={goal.key} style={textStyles}>
												{goal.body}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity
											key={goal.key}
											style={{ paddingHorizontal: 10 }}
											onPress={() => removeGoal(goal.key)}>
											<Icon name="close" size={20} color={COLORS.red} />
										</TouchableOpacity>
									</View>
								)
							})}
					</View>
					<View>
						<TextInput
							style={styles.input}
							placeholder="+ Add a goal"
							ref={input}
							onEndEditing={(val) => addGoal(val.nativeEvent.text)}
						/>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	)
}
