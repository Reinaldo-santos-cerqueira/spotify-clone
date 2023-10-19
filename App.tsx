import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash} from './src/pages/splash/splash';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): JSX.Element {
	const Stack = createNativeStackNavigator();

	return (
		<ThemeProvider theme={theme}>

			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>

	);
}

export default App;
