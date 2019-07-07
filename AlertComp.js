import React,{Component} from 'react';
import { Alert,Button } from 'reactstrap';

class AlertComp extends Component{
	constructor(props){
		super(props)
		this.state={
			visible:true
		}
	}
	toggleAlert(){
		this.setState({
			visible:!this.state.visible
		})
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2">
						<Alert 
							color="primary" 
							isOpen={this.state.visible} 
							toggle={this.toggleAlert.bind(this)}>
								{this.props.title}
						</Alert>
						<Button color="danger" onClick={this.toggleAlert.bind(this)}>Click</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default AlertComp;