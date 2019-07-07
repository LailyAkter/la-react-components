import React,{Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter,Button } from 'reactstrap';

class ModalComp extends Component{
	constructor(props){
		super(props)
		this.state={
			 modalIsOpen: false
		}
	}
	toggleModal() {
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    });
  	}
  render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2">
						<Button color="primary" onClick={this.toggleModal.bind(this)}>Open Modal</Button>
						<Modal isOpen={this.state.modalIsOpen}>
				          <ModalHeader toggle={this.toggleModal.bind(this)}>Modal Title</ModalHeader>
				          <ModalBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem fugiat perspiciatis sint, nostrum labore nobis quidem sed impedit quae quisquam corrupti, libero commodi a quod pariatur quo qui. Id?</ModalBody>
				          <ModalFooter>
				            <Button color="primary">Sign Up</Button>
				            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
				          </ModalFooter>
				        </Modal>
					</div>
				</div>
			</div>
		)
	}
}

export default ModalComp;