import React from 'react';

export default class Find extends React.Component{
	
	render(){
		return(
			<div className="weui-cells">
		        <div className="weui-cell" style={{textAlign: 'center'}}>
		            <div className="weui-cell__hd">
		            	<p style={styles.para}>22</p>
		            	<p>入住家族</p>
		            </div>
		            <div className="weui-cell__bd">
		              	<p style={styles.para}>324452</p>
		            	<p>家族总人数</p>
		            </div>
		            <div className="weui-cell__ft">
		            	<p style={styles.para}>123</p>
		            	<p>昨日新增</p>
		            </div>
		        </div>
				
			  	<div className="weui-cell">
			  		<div className="weui-cell__hd">
		            	<i className="fa fa-id-card-o" aria-hidden="true"></i>
		            </div>
				    <div className="weui-cell__bd">
				      	<p>云谱头条</p>
				    </div>
		    		<div className="weui-cell__ft"><i className="fa fa-picture-o" aria-hidden="true"></i></div>
				</div>

				<a className="weui-cell weui-cell_access">
					<div className="weui-cell__hd">
		            	<i className="fa fa-list-ul" aria-hidden="true"></i>
		            </div>
				    <div className="weui-cell__bd">
				      	<p>家族列表</p>
				    </div>
		    		<div className="weui-cell__ft"></div>
				</a>

				<a className="weui-cell weui-cell_access" href="">
			  		<div className="weui-cell__hd">
		            	<i className="fa fa-list-ul" aria-hidden="true"></i>
		            </div>
				    <div className="weui-cell__bd">
				      	<p>皇家世系</p>
				    </div>
				    <div className="weui-cell__ft"></div>
				</a>

				<a className="weui-cell weui-cell_access" href="">
					<div className="weui-cell__hd">
		            	<i className="fa fa-list-ul" aria-hidden="true"></i>
		            </div>
				    <div className="weui-cell__bd">
				      	<p>寻根问祖</p>
				    </div>
				    <div className="weui-cell__ft"></div>
				</a>

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