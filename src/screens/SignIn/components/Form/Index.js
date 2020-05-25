import React from 'react';
import Animated from 'react-native-reanimated';

import { StyleSheet } from 'react-native';

import Heading from './components/Heading';
import Form from './components/Form';

const textColor = '#434343';

const Index = ({ translateY, opacity }) => {
	return (
		<Animated.View
			style={{
				...StyleSheet.absoluteFill,
				...styles.container,
				transform: [
					{
						translateY: translateY
					}
				],
				opacity
			}}
		>
			<Heading textColor={textColor} />
			<Form textColor={textColor} />
		</Animated.View>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: '#f8f8f8'
	}
});
