import React from 'react'
import { Image, PermissionsAndroid, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions, Composer, Send } from 'react-native-gifted-chat'
import InputToolbarMod from './InputToolbarMod'
import ImagePicker from 'react-native-image-picker'

export const renderInputToolbar = (props) => (
	<InputToolbarMod
		{...props}
		containerStyle={{
			paddingTop: 6,
		}}
		primaryStyle={{ alignItems: 'center' }}
	/>
)

async function requestLibraryPermission() {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
			{
				title: 'title',
				message: 'message',
			}
		)
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('storage granted')
		} else {
			console.log('storage denied')
		}
	} catch (err) {
		console.warn(err)
	}
}

async function requestCameraPermission() {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.CAMERA,
			{
				title: 'title',
				message: 'message',
			}
		)
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('camera granted')
		} else {
			console.log('camera denied')
		}
	} catch (err) {
		console.warn(err)
	}
}

export const renderActions = (props) => (
	<Actions
		{...props}
		containerStyle={{
			width: 44,
			height: 44,
			alignItems: 'center',
			justifyContent: 'center',
			marginLeft: 9,
			marginRight: 4,
			marginBottom: 0,
		}}
		icon={() => <Icon name="image-plus" size={28} />}
		options={{
			'Choose From Library': () => {
				console.log('Choose From Library')
				requestLibraryPermission()
			},
			'Take Picture': () => {
				console.log('Take Picture')

				requestCameraPermission()
				// const options = {
				// 	quality: 1.0,
				// 	maxWidth: 500,
				// 	maxHeight: 500,
				// 	storageOptions: {
				// 		skipBackup: true,
				// 	},
				// }
				// ImagePicker.launchCamera(options, (response) => {
				// 	if (response.didCancel) {
				// 		console.log('User cancelled image picker')
				// 	} else if (response.error) {
				// 		console.log('ImagePicker Error: ', response.error)
				// 	} else if (response.customButton) {
				// 		console.log('User tapped custom button: ', response.customButton)
				// 	} else {
				// 		const source = { uri: response.uri }
				// 		console.log(source)

				// 		// You can also display the image using data:
				// 		// const source = { uri: 'data:image/jpeg;base64,' + response.data };
				// 	}
				// })
			},
			Cancel: () => {
				console.log('Cancel')
			},
		}}
		optionTintColor="#222B45"
	/>
)

export const renderComposer = (props) => (
	<Composer
		{...props}
		textInputStyle={{
			color: '#222B45',
			//backgroundColor: '#EDF1F7',
			// borderWidth: 1,
			// borderRadius: 5,
			//borderColor: '#E4E9F2',
			paddingTop: 8.5,
			// paddingHorizontal: 12,
			marginLeft: 0,
		}}
	/>
)

export const renderSend = (props) => (
	<Send
		{...props}
		disabled={!props.text}
		containerStyle={{
			width: 44,
			height: 44,
			alignItems: 'center',
			justifyContent: 'center',
			marginHorizontal: 4,
		}}>
		<Icon name="send" size={28} />
	</Send>
)
