import { 
	createRestyleComponent ,
	backgroundColor,
	BackgroundColorProps,
	border,
	BorderProps,
	layout,
	LayoutProps,
	spacing,
	SpacingProps,
	spacingShorthand,
	SpacingShorthandProps,
} from '@shopify/restyle';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme } from '../../theme/theme';

export type TouchableOpacityBoxProps = 	BackgroundColorProps<Theme> & 
										TouchableOpacityProps & 
										SpacingProps<Theme> & 
										SpacingShorthandProps<Theme> & 
										LayoutProps<Theme> & 
										BorderProps<Theme>

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps,Theme>(
	[	
		backgroundColor,
		spacing,
		layout,
		border,
		spacingShorthand
	],
	TouchableOpacity
);