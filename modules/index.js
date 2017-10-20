import React from 'react';
import {render} from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';
import Nav from './Nav.js';
import Body from './Body.js';

render((
	<HashRouter>
		<div className="weui-tab">
			<Body/>
			<Nav/>
	    </div>
	</HashRouter>
), document.getElementById('root'));
