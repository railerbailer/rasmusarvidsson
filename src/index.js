import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className="BodyDiv">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</div>, document.getElementById('root'));
registerServiceWorker();
