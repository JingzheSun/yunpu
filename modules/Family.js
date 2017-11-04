import React from 'react';

export default class Family extends React.Component{
	
	render(){
		return(
			<div className="weui-tab__bd-item weui-tab__bd-item--active">
				<div className="weui-cells">
			        <div className="weui-cell" style={{textAlign: 'center'}}>
			        	<div className="weui-cell__bd">
			              	<p style={styles.para}>324452</p>
			            	<p>家族总人数</p>
			            </div>
			            <div className="weui-cell__ft">
			            	<p style={styles.para}>123</p>
			            	<p>昨日新增</p>
			            </div>
			        </div>
			    </div>

			    <div className="weui-cells__title"></div>
			    
			    <div className="weui-cells">
				  	<div className="weui-cell" href="">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-share-alt" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>分享</p>
					    </div>
			    		<div className="weui-cell__ft"><i className="fa fa-picture-o" aria-hidden="true"></i></div>
					</div>

					<a className="weui-cell weui-cell_access" href="">
						<div className="weui-cell__hd">
			            	<i className="fa fa-th" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>家族管理</p>
					    </div>
			    		<div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-sitemap" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>家族树</p>
					    </div>
					    <div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
						<div className="weui-cell__hd">
			            	<i className="fa fa-list-ul" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>家族动态</p>
					    </div>
					    <div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
						<div className="weui-cell__hd">
			            	<i className="fa fa-calendar-check-o" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>大事记</p>
					    </div>
			    		<div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-id-card-o" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>家谱</p>
					    </div>
					    <div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
						<div className="weui-cell__hd">
			            	<i className="fa fa-address-book" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>家族资料</p>
					    </div>
					    <div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
						<div className="weui-cell__hd">
			            	<i className="fa fa-user-secret" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>家族名人</p>
					    </div>
			    		<div className="weui-cell__ft"></div>
					</a>

					<a className="weui-cell weui-cell_access" href="">
				  		<div className="weui-cell__hd">
			            	<i className="fa fa-user-plus" aria-hidden="true"></i>
			            </div>
					    <div className="weui-cell__bd">
					      	<p>成员申请</p>
					    </div>
					    <div className="weui-cell__ft"></div>
					</a>
		        </div>
		    </div>
		)
	}
}

var styles = {};

styles.para = {
	border: '1px solid gray',
	color: 'red',
	fontSize: '20px'
}