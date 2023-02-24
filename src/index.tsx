import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
