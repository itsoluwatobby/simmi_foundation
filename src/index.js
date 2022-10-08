import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import WindowContextProvider from './context/WindowContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <WindowContextProvider>
        <App />
    </WindowContextProvider>
  </React.StrictMode>
);

