import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Analytics } from "@vercel/analytics/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.800",
        color: "white"
      }
    }
  },
  colors: {
    chakra: {
      borderColor: "gray.400"
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>
);