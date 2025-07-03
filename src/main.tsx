import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { ThemeContextProvider } from './shared/lib/theme/ThemeContext.tsx';
import { ErrorBoundary } from './features/error-boundary/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ErrorBoundary>
  </StrictMode>
);
