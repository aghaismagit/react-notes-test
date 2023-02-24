import React from 'react';
import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/utils/classNames/classNames';
import MainPage from 'pages/MainPage/ui/MainPage';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const { theme } = useTheme();

    return (
        <>
            <div className={classNames('app_wrapper', {}, [theme])}><MainPage /></div>
            <ToastContainer />
        </>
    );
}

export default App;
