import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
require('./vendor/bootstrap/bootstrap.scss');
require('./styles/main.scss');
require('./vendor/fonts-awesome/font-awesome.min.css');

render(
    <Routes />,
    document.getElementById('app')
);

