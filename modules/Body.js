import React from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Message from './Message.js';
import Mine from './Mine.js';
import Find from './Find.js';
import Family from './Family.js';
import Settings from './Mine/Settings.js';
import Info from './Mine/Info.js'

export default class Body extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="weui-tab__bd">
				<Switch>
					<Redirect exact from="/" to='/family' />
					<SubRoute path='/:whatever/:topicId'/>

					<Route path="/message" component={Message}/>
					<Route path="/family" component={Family}/>
			    	<Route path="/find" component={Find}/>
			    	<Route path='/mine' component={Mine}/>
		    	</Switch>
		    </div>
		)
	}
}

const settings = Settings;
const info = Info;

const SubRoute = (route) => {
	let s = route.location.pathname;
	let i = s.indexOf('/',3);
	let j = s.indexOf('/',i+1);
	j = j > 0 ? j : 100;
	let tmp = s.slice(i+1, j); 
	return (<Route path={route.path} component={eval(tmp)}/>)
}