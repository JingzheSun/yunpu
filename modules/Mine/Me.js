import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component{
	render(){
		return(
		    <div className="weui-tabbar">
		        <a href="#tab1" className="weui-tabbar__item weui-bar__item--on">
		        	<span className="weui-badge" style={styles.badge}>8</span>
		          	<div className="weui-tabbar__icon">
		            	<i className="fa fa-comments-o" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">消息</p>
		        </a>
		        <a href="#tab2" className="weui-tabbar__item">
		          	<div className="weui-tabbar__icon">
		            	<img src="./modules/src/NT.jpg" alt=""/>
		          	</div>
		          	<p className="weui-tabbar__label">家族</p>
		        </a>
		        <a href="#tab3" className="weui-tabbar__item">
		          	<div className="weui-tabbar__icon">
		            	<i className="fa fa-search-plus" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">发现</p>
		        </a>
		        <a href="#tab4" className="weui-tabbar__item">
		          	<div className="weui-tabbar__icon">
		            	<i className="fa fa-user" aria-hidden="true"></i>
		          	</div>
		          	<p className="weui-tabbar__label">我的</p>
		        </a>
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