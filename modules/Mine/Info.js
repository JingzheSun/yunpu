import React from 'react';
import {Route, Switch, Redirect, NavLink, Link} from 'react-router-dom';

export default class Info extends React.Component{
	constructor(props){
		super(props);
	}

	contact(){
		$.modal({
		  title: "Hello",
		  text: "我是自定义的modal",
		  buttons: [
		    { text: "支付宝", onClick: function(){ console.log(1)} },
		    { text: "微信支付", onClick: function(){ console.log(2)} },
		    { text: "取消", className: "default", onClick: function(){ console.log(3)} },
		  ]
		});
	}

	render(){
		let {match} = this.props;
		return(
			<div className="weui-tab__bd-item weui-tab__bd-item--active text-center" style={styles.bg}>
				<div className="container">
			        <img src="./modules/src/NT.jpg" style={styles.img}/>
			        <h2>zgz</h2>
			        <button className='btn btn-primary' onClick={this.contact}>联系</button>
		        </div>

		        <div className="row">
			        <div className='col-sm-4 col-xs-4' style={styles.nav}><Link to={`${match.url}/biography`}>历程</Link></div>
			        <div className='col-sm-4 col-xs-4' style={styles.nav}><Link to={`${match.url}/share`}>分享</Link></div>
			        <div className='col-sm-4 col-xs-4' style={styles.nav}><Link to={`${match.url}/relatives`}>亲属</Link></div>
		        </div>

		        <Switch>
					<Route exact path={`${match.url}`} component={Biography}/>
					<Route path={`${match.url}/biography`} component={Biography}/>
					<Route path={`${match.url}/share`} component={Share}/>
			    	<Route path={`${match.url}/relatives`} component={Relatives}/>
		    	</Switch>
		    </div>
		)
	}
}

var styles={};

styles.img = {
	'width': '60%',
	'margin': '10px'
}

styles.bg = {
	'background': 'white'
}

styles.nav = {
	'border': '1px solid black'
}




const Biography = () => (<p>石室诗士施氏，嗜狮，誓食十狮。施氏时时适市视狮。
十时，适十狮适市。是时，适施氏适市。施氏视十狮，恃矢势，使是十狮逝世。氏拾是十狮尸，适石室。
石室湿，施氏使侍拭石室。石室拭，施氏始试食十狮尸。食时，始识十狮实十石狮尸。试释是事。</p>);

const Share = () => (<p>石室诗士施氏，嗜尸。食时，始识十狮实十石狮尸。试释是事。</p>);

const Relatives = () => (<p>实十石。试释是事。</p>);