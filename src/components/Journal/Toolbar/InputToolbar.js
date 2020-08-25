import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat'
import ImagePicker from 'react-native-image-picker'

export const renderInputToolbar = (props) => (
	<InputToolbar
		{...props}
		containerStyle={{
			paddingTop: 6,
		}}
		primaryStyle={{ flexDirection: 'row', alignItems: 'flex-start' }}
	/>
)
export const renderActions = (props) => {
	const openActions = () => {
		const options = {
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			storageOptions: {
				skipBackup: true,
			},
		}
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ')
			} else if (response.customButton) {
				console.log('User tapped custom button: ')
			} else {
				const source = { uri: response.uri }
				props.sendImage(response.uri)
			}
		})
	}
	return (
		<View style={{ padding: 8 }}>
			<TouchableOpacity onPress={() => openActions()}>
				<Icon name="image-plus" size={28} />
			</TouchableOpacity>
		</View>
	)
}

export const renderComposer = (props) => (
	<Composer
		{...props}
		textInputStyle={{
			color: '#222B45',
			paddingTop: 8.5,
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
