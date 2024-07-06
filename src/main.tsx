import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/customTheme.ts';
import './index.css';

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV === 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  );
});
