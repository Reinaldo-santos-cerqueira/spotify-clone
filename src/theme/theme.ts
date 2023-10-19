import {createTheme} from '@shopify/restyle';

const palette = {
	greenPrimary: '#1BC357',
	grayBlack: '#000000',
	gray1: '#121212',
	gray2: '#1D1D1D',
	gray3: '#535353',
	gray4: '#b3b3b3',
	grayWhite: '#FFFFFF',
	greenSuccess: '#4ABC86',
	greenSuccessLight: '#D8FFEC',
	redError: '#EA3838',
	redErrorLight: '#FBECEC',
};

export const theme = createTheme({
	colors: {
		...palette,
		primary: palette.greenPrimary,
		primaryContrast: palette.grayBlack,
		buttonPrimary: palette.greenPrimary,
		background: palette.gray1,
		backgroundMusic: palette.gray2,
		backgroundContrast: palette.grayWhite
	},
	spacing: {
		s4: 4,
		s8: 8,
		s10: 10,
		s12: 12,
		s14: 14,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
		s48: 48,
		s56: 56,
	},
	borderRadii: {
		s8: 8,
		s12: 12,
		s16: 16,
	},
	textVariants: {
		defaults:{}
	}
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
