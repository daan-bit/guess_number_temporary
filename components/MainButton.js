import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>{props.children}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 20,
		overflow: 'hidden'
	},
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		alignContent: 'center'
	}
});

export default MainButton;
