import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash} from './src/pages/splash/splash';

function App(): JSX.Element {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
