import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    main: 'var(--color-main)',
    banner: 'var(--color-banner)',
    background: 'var(--color-background)',
    red: 'var(--color-red)',
    blue: 'var(--color-blue)',
    gray: 'var(--color-gray)',
    logo: 'var(--color-logo)',
    btnHover: 'var(--color-background)',
  },
});

const theme = extendTheme(customTheme);
export default theme;
