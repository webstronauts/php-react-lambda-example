import React from 'react';
import { render } from 'react-dom';
import Application from './app';

const payload = window.__INITIAL_PAYLOAD__;

render(<Application name={payload.name} />, document.getElementById('root'));
