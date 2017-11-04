import React from 'react';
import {Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class Mine extends React.Component{
	
	render(){
		let {location} = this.props;
		return(
			<div className="weui-tab__bd-item weui-tab__bd-item--active">
				<div className="weui-cells">
			        <Link className="weui-cell weui-cell_access" to={`${location.pathname}/info`}>
			            <div className="weui-cell__hd">
			            	<img src="./modules/src/NT.jpg" style={styles.img}/>
			            </div>
			            <div className="weui-cell__bd">
			              	<p>脑瘫</p>
			            </div>
			            <div className="weui-cell__ft"><i className="fa fa-qrcode" aria-hidden="true"></i></div>
			        </Link>
		        </div>
		        <div className="weui-cells__title"></div>
		        <div className="weui-cells">
				  	<div className="weui-cell">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-pagelines" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>我的积分</p>
					    </div>
			    		<div className="weui-cell__ft">321</div>
					</div>

					<div className="weui-cell">
						<div className="weui-cell__hd">
			            	<i className="fa fa-heartbeat" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>资助云谱</p>
					    </div>
			    		<div className="weui-cell__ft">123</div>
					</div>
		        </div>
		        <div className="weui-cells__title"></div>
		        <div className="weui-cells">
					<Link className="weui-cell weui-cell_access" to="/">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-heart" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>收藏</p>
					    </div>
					</Link>

					<Link className="weui-cell weui-cell_access" to="/">
						<div className="weui-cell__hd">
			            	<i className="fa fa-commenting-o" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>问题反馈</p>
					    </div>
					</Link>

					<Link className="weui-cell weui-cell_access" to="/">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-thumbs-up" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>邀请</p>
					    </div>
					</Link>

					<Link className="weui-cell weui-cell_access" to={`${location.pathname}/settings`}>
						<div className="weui-cell__hd">
			            	<i className="fa fa-cog" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>设置</p>
					    </div>
					</Link>
		        </div>
		    </div>
		)
	}
}

var styles = {};

styles.img = {
	width:'40px',
	marginRight:'5px',
	display: 'block'
}