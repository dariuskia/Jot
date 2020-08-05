import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
//import PropTypes from 'prop-types'

export default Header = ({ title, page, locked }) => {
	//TO DO:
	// Change header based on page passed
	// Journal page no chevron, center title and right lock
	// Calendar page chevron, center title and right lock (for some)
	return (
		<View style={styles.container}>
			<Icon name="chevron-left" size={30} color="white" style={styles(page).back} />
			<Text style={styles.title}>{title}</Text>

			<TouchableOpacity onPress={toggleLock}>
				{page === 'Journal' ? (<Icon name={locked ? "lock" : "lock-open"} size={30} color={locked ? "#2D66BC" : "#FFFFFF40"} style={styles.lock} />) : <View style={{ height: 30, width: 30 }} />}
			</TouchableOpacity>
		</View>
	)
}

// Header.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	type: PropTypes.string,
// 	tlocked: PropTypes.boolean,
// }