import React from 'react';

export default class Home extends React.Component{
	click(event){
		event.preventDefault();
		console.log(event.target)
	}

	componentDidMount(){
		$("#projects").on("click", function(){
		  $("#projectList").slideToggle();
		  $("#blank").css("height", window.innerHeight*0.2 + "px");
		  $("#blank").slideToggle();
		});
	}

	render(){
		const IFRAME = (props) => (
			<div className="col-lg-4 col-md-4 col-sm-6 frame">
				<a href={props.src} target="_blank">
					<img src={"./modules/src/" + props.name + ".png"}/>
					<div className="title">{props.name}</div>
				</a>
			</div>
		)
		return(
			<div id="home" className="block">
				<div style={{"height": window.innerHeight*1.2 + "px"}}>
					<div id="blank"></div>
					<h1>Jingzhe Sun</h1>
					<hr />
					<div id="projects">
						<h3>Projects <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></h3>

					</div>
				</div>
			</div>
		)
	}
}