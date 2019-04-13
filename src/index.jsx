import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Find icons at https://fontawesome.com/icons?d=gallery
// Build a Library to reference icons throughout the app
// https://github.com/FortAwesome/react-fontawesome
library.add(faPlus);
library.add(faMinus);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
