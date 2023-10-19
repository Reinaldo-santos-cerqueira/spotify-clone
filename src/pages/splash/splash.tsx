import React from 'react';
import {Box} from '../../components/box/box';
import { Image } from 'react-native';
import Logo from '../../assets/logo.png';

export function Splash() {
	return(
		<Box
			backgroundColor='background'
			flex={1}
		>
			<Image source={Logo} style={{width: 200, height: 200}}/>
		</Box>
	);
}
