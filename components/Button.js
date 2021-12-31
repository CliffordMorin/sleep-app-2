import { React, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
			<Button
				onPress={() => {
					setBackgroundColor(setRandomColor);
				}}
				title="Sleep"
				color={backgroundColor}
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
}
