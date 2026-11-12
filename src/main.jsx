import 'virtual:svg-icons-register';
import './app/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from '@/app/App.jsx';
import ThemeProvider from '@/app/providers/theme/ThemeProvider.jsx';
import ToastProvider from '@/app/providers/toast/ToastProvider.jsx';

const queryClient = new QueryClient();
const clientId = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={clientId}>
          <ThemeProvider>
            <ToastProvider />
            <App />
          </ThemeProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
