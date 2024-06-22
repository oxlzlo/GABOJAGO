import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    main: 'var(--color-main)',
    // primary: 'var(--color-primary)',
    // secondary: 'var(--color-secondary)',

    white: 'var(--color-white)',
    banner: 'var(--color-banner)',
    background: 'var(--color-background)',
    price: 'var(--color-price)',
    blue: 'var(--color-blue)',
    gray: 'var(--color-gray)',
    logo: 'var(--color-logo)',
    btnHover: 'var(--color-background)',
    primaryHover: 'var(--color-primaryHover)',
  },
});

const theme = extendTheme(customTheme);
export default theme;
