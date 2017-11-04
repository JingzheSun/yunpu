import React from 'react';
import {Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class Settings extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
		    <div className="weui-tab__bd-item weui-tab__bd-item--active">
				<div className="weui-cells">
			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>新消息通知</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>

			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>勿扰模式</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>

			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>字体大小</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>
		        </div>

		        <div className="weui-cells__title"></div>

		        <div className="weui-cells">
			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>手机号 12345678910</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>

			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>修改密码</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>

			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>微信帐号</p>
			            </div>
			            <div className="weui-cell__ft">未绑定</div>
			        </Link>
		        </div>

		        <div className="weui-cells__title"></div>

		        <div className="weui-cells">
			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>关于云谱</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>

			        <Link className="weui-cell weui-cell_access" to="/">
			            <div className="weui-cell__bd">
			              	<p>服务协议</p>
			            </div>
			            <div className="weui-cell__ft"></div>
			        </Link>
		        </div>

		        <button className='btn btn-danger' style={styles.btn}>退出登录</button>
		    </div>
		)
	}
}

var styles={};

styles.btn = {
	'display': 'block',  
	'margin': '10px auto',
	'textAlign': 'center',
	'width': '80%'
}