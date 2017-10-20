import React from 'react';
import {NavLink} from 'react-router-dom';
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
				<div id='nav' className='row'>
					<div className="col-md-4 col-sm-4 col-xs-4">
						<NavLink to="/"><i className="fa fa-chevron-left" aria-hidden="true"></i>main</NavLink>
					</div>
					<div className="col-md-5 col-sm-5 col-xs-5">
						haha
					</div>
					<div className="col-md-3 col-sm-3 col-xs-3">
						<i className="fa fa-search" aria-hidden="true"></i>
						<i className="fa fa-plus" aria-hidden="true"></i>
					</div>
				</div>
		        <div id="tab1" className="weui-tab__bd-item weui-tab__bd-item--active">
		          	<Message/>
		        </div>
		        <div id="tab2" className="weui-tab__bd-item">
		          	<Family/>
		        </div>
		        <div id="tab3" className="weui-tab__bd-item">
		          	<Find/>
		        </div>
		        <div id="tab4" className="weui-tab__bd-item">
		        	<Mine/>
		        </div>
		    </div>
		)
	}
}