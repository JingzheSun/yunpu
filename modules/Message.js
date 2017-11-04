import React from 'react';

export default class Message extends React.Component{
	render(){
		const Msg = ({title}) => (
			<a className="weui-cell weui-cell_access" href="">
	            <div className="weui-cell__hd">
	            	<img src="./modules/src/NT.jpg" style={styles.img}/>
	            </div>
	            <div className="weui-cell__bd">
	              	<p>cell standard</p>
	            </div>
	            <div className="weui-cell__ft">{title}</div>
	        </a>
		)

		var m = ['sha','diao','nao','tan'];
		return(
			<div className="weui-tab__bd-item weui-tab__bd-item--active">
		    	<div className="weui-cells">
			        {
			        	m.map((s,i) => <Msg title={s} key={i}/>)
			        }
	        	</div>
	        </div>
		)
	}
}

var styles = {};

styles.img = {
	width:'20px',
	marginRight:'5px',
	display: 'block'
}