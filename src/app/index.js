import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
require('./styles/main.scss');

render(
    <Routes />,
    document.getElementById('app')
);

