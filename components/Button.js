import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function Buttons() {
	const setRandomColor = () => {
		const rgbValue1 = Math.floor(Math.random() * 256 + 1);
		const rgbValue2 = Math.floor(Math.random() * 256 + 1);
		const rgbValue3 = Math.floor(Math.random() * 256 + 1);

		return `rgb(${rgbValue1},${rgbValue2},${rgbValue3})`;
	};

	const [ backgroundColor, setBackgroundColor ] = useState('black');

	return (
		<View>
			<Text
				style={{
					fontSize: 80,
					color: backgroundColor
				}}
				onPress={() => {
					setBackgroundColor(setRandomColor);
				}}
				accessibilityLabel="Learn more about this button"
			>
				Sleep
			</Text>
		</View>
	);
}
