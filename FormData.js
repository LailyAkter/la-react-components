import React from 'react';
import Label from './Form/Label';
import Input from './Form/Input';
import Div from './Form/Div';
import Form from './Form/Form';
import Button from './Form/Button';
import TextArea from './Form/TextArea';

class FormData extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			email:'',
			password:'',
			comments:'',
			radio:''
		}
		this.changeHandlerName=this.changeHandlerName.bind(this)
		this.changeEmail=this.changeEmail.bind(this)
		this.changePassword=this.changePassword.bind(this)
		this.changeComments=this.changeComments.bind(this)
	}
	changeHandlerName(event){
		this.setState({
			name:event.target.value
		})
	}
	submitHandler(event){
		alert(`${this.state.name}${this.state.email}${this.state.password}${this.state.comments}`)
		event.preventDefault()
	}
	render(){
		return(
		    <div className='container'>
		    	<div className="row">
		    		<div className="col-sm-8 offset-sm-2">
		    			<form className='' onSubmit={this.submitHandler}>
							<div className="form-group">
								<Label name="Name:" />
								<Input 
									type="text"
									value={this.state.name} 
									className='form-control'
									onChange={this.changeHandlerName}
									placeholder="Enter Your Name"
								/>
							</div>
							<div className="form-group">
								<Label name="Email:" />
								<Input 
									type="email"
									value={this.state.email} 
									className='form-control'
									onChange={this.changeEmail}
									placeholder="Enter Your Email"
								/>
							</div>
							<div className="form-group">
								<Label name="Password:" />
								<Input 
									type="password"
									value={this.state.password} 
									className='form-control'
									onChange={this.changePassword}
									placeholder="Enter Your Password"
								/>
							</div>
							<div className="form-group">
								<Label name="Comments:" />
								<TextArea 
									type="text"
									value={this.state.comments} 
									className='form-control'
									onChange={this.changeComments}
									style={{resize:'none'}}
									placeholder="Enter Your Comment"
								/>
							</div>
							<div className="form-group">
							    <Label name="Radio:" />
							        <div className="form-check">
							          <Input  type="radio"value="Male" id="gender1"/>
							          <Label  name="Male"/>
							        </div>
							        <div className="form-check">
							          <Input  type="radio" value="Female" id="gender2"/>
							          <Label  name='Female'/>
							        </div>
							        <div className="form-check">
							          <Input  type="radio" value="Others" id="gender3"/>
							          <Label  name="Others" />
							        </div>
							  </div>
							<Button className='btn btn-primary lg' name='Submit'/>
						</form>
		    		</div>
		    	</div>
			</div>
		)
	}
}

export default FormData;