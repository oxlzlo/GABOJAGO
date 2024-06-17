import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    yellow: 'var(--color-yellow)',
    red: 'var(--color-red)',
  },
});

const theme = extendTheme(customTheme);
export default theme;
