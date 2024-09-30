import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			// A. Typography
			fontFamily: {
				suit: ['SUIT', 'sans-serif'],
				pretendard: ['Pretendard Variable', 'sans-serif'],
			},
			fontSize: {
				// Title
				'title-1-extrabold': [
					'32px',
					{ lineHeight: '44px', letterSpacing: '-0.96px', fontWeight: '900' },
				],
				'title-1-bold': [
					'32px',
					{ lineHeight: '44px', letterSpacing: '-0.96px', fontWeight: '700' },
				],
				'title-1-medium': [
					'32px',
					{ lineHeight: '44px', letterSpacing: '-0.96px', fontWeight: '500' },
				],
				'title-1-regular': [
					'32px',
					{ lineHeight: '44px', letterSpacing: '-0.96px', fontWeight: '400' },
				],

				'title-2-extrabold': [
					'28px',
					{ lineHeight: '40px', letterSpacing: '-0.84px', fontWeight: '900' },
				],
				'title-2-bold': [
					'28px',
					{ lineHeight: '40px', letterSpacing: '-0.84px', fontWeight: '700' },
				],
				'title-2-medium': [
					'28px',
					{ lineHeight: '40px', letterSpacing: '-0.84px', fontWeight: '500' },
				],
				'title-2-regular': [
					'28px',
					{ lineHeight: '40px', letterSpacing: '-0.84px', fontWeight: '400' },
				],

				'title-3-extrabold': [
					'24px',
					{ lineHeight: '36px', letterSpacing: '-0.72px', fontWeight: '900' },
				],
				'title-3-bold': [
					'24px',
					{ lineHeight: '36px', letterSpacing: '-0.72px', fontWeight: '700' },
				],
				'title-3-medium': [
					'24px',
					{ lineHeight: '36px', letterSpacing: '-0.72px', fontWeight: '500' },
				],
				'title-3-regular': [
					'24px',
					{ lineHeight: '36px', letterSpacing: '-0.72px', fontWeight: '400' },
				],

				// Heading
				'heading-1-bold': [
					'22px',
					{ lineHeight: '34px', letterSpacing: '-0.66px', fontWeight: '700' },
				],
				'heading-1-medium': [
					'22px',
					{ lineHeight: '34px', letterSpacing: '-0.66px', fontWeight: '500' },
				],
				'heading-1-regular': [
					'22px',
					{ lineHeight: '34px', letterSpacing: '-0.66px', fontWeight: '400' },
				],

				'heading-2-bold': [
					'20px',
					{ lineHeight: '32px', letterSpacing: '-0.6px', fontWeight: '700' },
				],
				'heading-2-medium': [
					'20px',
					{ lineHeight: '32px', letterSpacing: '-0.6px', fontWeight: '500' },
				],
				'heading-2-regular': [
					'20px',
					{ lineHeight: '32px', letterSpacing: '-0.6px', fontWeight: '400' },
				],

				'heading-3-bold': [
					'18px',
					{ lineHeight: '30px', letterSpacing: '-0.54px', fontWeight: '700' },
				],
				'heading-3-medium': [
					'18px',
					{ lineHeight: '30px', letterSpacing: '-0.54px', fontWeight: '500' },
				],
				'heading-3-regular': [
					'18px',
					{ lineHeight: '30px', letterSpacing: '-0.54px', fontWeight: '400' },
				],

				'heading-4-bold': [
					'16px',
					{ lineHeight: '28px', letterSpacing: '-0.48px', fontWeight: '700' },
				],
				'heading-4-medium': [
					'16px',
					{ lineHeight: '28px', letterSpacing: '-0.48px', fontWeight: '500' },
				],
				'heading-4-regular': [
					'16px',
					{ lineHeight: '28px', letterSpacing: '-0.48px', fontWeight: '400' },
				],

				'heading-5-bold': [
					'14px',
					{ lineHeight: '26px', letterSpacing: '-0.42px', fontWeight: '700' },
				],
				'heading-5-medium': [
					'14px',
					{ lineHeight: '26px', letterSpacing: '-0.42px', fontWeight: '500' },
				],
				'heading-5-regular': [
					'14px',
					{ lineHeight: '26px', letterSpacing: '-0.42px', fontWeight: '400' },
				],

				// Body
				'body-1-bold': [
					'20px',
					{ lineHeight: '30px', letterSpacing: '-0.06px', fontWeight: '700' },
				],
				'body-1-medium': [
					'20px',
					{ lineHeight: '30px', letterSpacing: '-0.06px', fontWeight: '500' },
				],
				'body-1-regular': [
					'20px',
					{ lineHeight: '30px', letterSpacing: '-0.06px', fontWeight: '400' },
				],

				'body-2-bold': [
					'18px',
					{ lineHeight: '26px', letterSpacing: '-0.54px', fontWeight: '700' },
				],
				'body-2-medium': [
					'18px',
					{ lineHeight: '26px', letterSpacing: '-0.54px', fontWeight: '500' },
				],
				'body-2-regular': [
					'18px',
					{ lineHeight: '26px', letterSpacing: '-0.54px', fontWeight: '400' },
				],

				'body-3-bold': [
					'16px',
					{ lineHeight: '24px', letterSpacing: '-0.48px', fontWeight: '700' },
				],
				'body-3-medium': [
					'16px',
					{ lineHeight: '24px', letterSpacing: '-0.48px', fontWeight: '500' },
				],
				'body-3-regular': [
					'16px',
					{ lineHeight: '24px', letterSpacing: '-0.48px', fontWeight: '400' },
				],

				'body-4-bold': [
					'14px',
					{ lineHeight: '20px', letterSpacing: '-0.42px', fontWeight: '700' },
				],
				'body-4-medium': [
					'14px',
					{ lineHeight: '20px', letterSpacing: '-0.42px', fontWeight: '500' },
				],
				'body-4-regular': [
					'14px',
					{ lineHeight: '20px', letterSpacing: '-0.42px', fontWeight: '400' },
				],

				'body-5-bold': [
					'12px',
					{ lineHeight: '18px', letterSpacing: '-0.36px', fontWeight: '700' },
				],
				'body-5-medium': [
					'12px',
					{ lineHeight: '18px', letterSpacing: '-0.36px', fontWeight: '500' },
				],
				'body-5-regular': [
					'12px',
					{ lineHeight: '18px', letterSpacing: '-0.36px', fontWeight: '400' },
				],

				// Caption
				'caption-bold': [
					'10px',
					{ lineHeight: '16px', letterSpacing: '-0.3px', fontWeight: '700' },
				],
				'caption-medium': [
					'10px',
					{ lineHeight: '16px', letterSpacing: '-0.3px', fontWeight: '500' },
				],
				'caption-regular': [
					'10px',
					{ lineHeight: '16px', letterSpacing: '-0.3px', fontWeight: '400' },
				],
			},

			colors: {
				primary: {
					text: '#3C86FF', // blue400
					normal: '#2440F2', // blue500
					active: '#0019B7', // blue600
					disabled: '#AFC7E3', // blue200
				},
				secondary: {
					red: '#FF4242', // red500
					green: '#00DF67', // green500
					yellow: '#FFD600', // yellow500
				},
				label: {
					default: '#242424', // neutral10
					strong: '#111111', // neutral0
					sub: '#484B5B', // neutral30
					info: '#0000001A', // neutral60
					assistive: '#A6A8B0', // neutral90
				},
				background: {
					default: '#111111', // neutral0
					alternative: '#242424', // neutral10
				},
				border: {
					default: '#E1E2E4', // neutral96
					sub: '#EAEBEC', // neutral97
					alternative: '#F4F4F5', // neutral98
					strong: '#C2C4C8', // neutral80
					active: '#2440F2', // blue600
				},
			},

			// C. Spacing
			spacing: {
				'0': '0px',
				'2': '2px',
				'4': '4px',
				'6': '6px',
				'8': '8px',
				'12': '12px',
				'16': '16px',
				'20': '20px',
				'24': '24px',
				'28': '28px',
				'32': '32px',
				'36': '36px',
				'40': '40px',
				'48': '48px',
				'64': '64px',
				'80': '80px',
				'100': '100px',
				'120': '120px',
				'140': '140px',
				'160': '160px',
				'180': '180px',
				'200': '200px',
			},

			// D. Border Radius
			borderRadius: {
				'0': '0px',
				'2': '2px',
				'4': '4px',
				'6': '6px',
				'8': '8px',
				'10': '10px',
				'12': '12px',
				'20': '20px',
				'40': '40px',
				'80': '80px',
			},
		},
	},
	plugins: [],
};

export default config;
