import { background, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // Change the background color here
      body: {
        bg: '#f2f2f2',
      },
    },
  },
  fonts: {
    body: "'Kalameh', sans-serif",
    bold: "'KalameBold'",
    heading: "'Kalameh', sans-serif",
  },
  fontSize: {
    font18: 18,
  },
  colors: {
    primary: {
      50: '#F0F5FF',
      100: '#DDEAFE',
      200: '#B7D2FE',
      300: '#85A9FD',
      400: '#608BFC',
      500: '#3B67F5',
      600: '#2747D8',
      700: '#1C34B2',
      800: '#152A8E',
      900: '#212e47',
    },
    secondary: {
      50: '#FDF2F8',
      100: '#FCE7F2',
      200: '#F8B4D4',
      300: '#F17FA7',
      400: '#E94581',
      500: '#DC0D5F',
      600: '#B20B4B',
      700: '#8A093B',
      800: '#64072E',
      900: '#ca7e65',
    },
    background: {
      800: '#f6f9fb',
      900: '#f2f2f2',
    },
    textBase: '#212e47',
    textGray: '#4b4b4b',
    textGold: '#ca7e65',

    // Add more custom colors as needed
  },
});

export default theme;
