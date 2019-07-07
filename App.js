import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import FormData from './FormData';
import AlertComp from './AlertComp';
import ModalComp from './ModalComp';
import NavComp from './NavComp';
import TableComp from './TableComp';
import ProgresComp from './ProgresComp';
import SliderComp from './SliderComp';
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // startDate: moment()
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let main = this.state.startDate
  //   console.log(main.format('L'));
  // }

  render() {
    return (
            <div>
              <AlertComp title="Hi! I Am Alert"/>
              <br/>
              <ModalComp/>
              <br/>
              <NavComp/>
              <br/>
              <TableComp/>
              <br/>
              <ProgresComp/>
              <br/>
              <SliderComp/>
              <br/>
            </div>
      // // <div className = "container">
      // //   <h3>React Datepicker Example</h3>
      // //   <form onSubmit={ this.handleSubmit }>
      // //     <div className="form-group">
      // //       <label>Select Date: </label>
      // //       <DatePicker
      // //         selected={ this.state.startDate }
      // //         onChange={ this.handleChange }
      // //         name="startDate"
      // //         dateFormat="MM/DD/YYYY"
      // //       />
      // //     </div>
      // //     <div className="form-group">
      // //       <button className="btn btn-success">Add Date</button>
      // //     </div>
      // //   </form>
      // </div>
    );
  }
}

export default App;