import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'react-toastify/dist/ReactToastify.css';

render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root'),
);
