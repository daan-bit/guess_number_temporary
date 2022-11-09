import React from 'react'
import { StyleSheet, Text } from 'react-native';

const TitleText = props => {
    return (
        <Text style={{...styles.text, ...props.style}} >{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18
	}
})

export default TitleText;