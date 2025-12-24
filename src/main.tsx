import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes';
import './scss/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
