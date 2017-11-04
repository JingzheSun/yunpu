import React from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Message from './Message.js';
import Mine from './Mine.js';
import Find from './Find.js';
import Family from './Family.js';

export default class Body extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="weui-tab__bd">
				<Switch>
					<Redirect exact from="/" to='/family' />
					<Route path="/message" component={Message}/>
					<Route path="/family" component={Family}/>
			    	<Route path="/find" component={Find}/>
			    	<Route path="/mine" component={Mine}/>
		    	</Switch>
		    </div>
		)
	}
}