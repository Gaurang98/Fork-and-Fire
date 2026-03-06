import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element and create React root
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the main App component
root.render(<App />);
