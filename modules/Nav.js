import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component{
	render(){
		return(
		    <div className="weui-tabbar">
		        <NavLink to="/message" className="col-xs-3 col-sm-3 col-md-3">
		        	<span className="weui-badge" style={styles.badge}>8</span>
		          	<div style={styles.icon}>
		            	<i className="fa fa-comments-o" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">消息</p>
		        </NavLink>
		        <NavLink to="/family" className="col-xs-3 col-sm-3 col-md-3">
		          	<div style={styles.icon}>
		            	<i className="fa fa-users" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">家族</p>
		        </NavLink>
		        <NavLink to="/find" className="col-xs-3 col-sm-3 col-md-3">
		          	<div style={styles.icon}>
		            	<i className="fa fa-search-plus" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">发现</p>
		        </NavLink>
		        <NavLink to="/mine" className="col-xs-3 col-sm-3 col-md-3">
		          	<div style={styles.icon}>
		            	<i className="fa fa-user" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">我的</p>
		        </NavLink>
		    </div>
		)
	}
}

var styles={};

styles.badge = {
	"position": "absolute",
	'top': '-.4em',
	'right': '1em'
}

styles.icon = {
	'textAlign':'center'
}