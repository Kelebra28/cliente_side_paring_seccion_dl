import React from 'react';
import ReactDOM from 'react-dom';
import { ServiceProvider } from './context/services/ServicesContext';
import App from './App';

ReactDOM.render(
    <ServiceProvider>
        <App />
    </ServiceProvider>,
    document.getElementById('root')
);

