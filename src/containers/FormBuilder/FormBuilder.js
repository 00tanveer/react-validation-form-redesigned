import React, {Component} from 'react';
import Output from '../../components/Output/Output';
import './FormBuilder.css';
import Aux from '../../hoc/Aux/Aux';

class Builder extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: null,
      nameValid: false,
      emailValid: false,
      phoneValid: false,
      nameTouched: false,
      emailTouched: false,
      phoneTouched: false,
      allValid: false,
      showOutput: false
    };
  }

orderHandler = (event) => {
  event.preventDefault();
  this.setState({showOutput: true})
}

handleNameInputChange = (event) => {

  let value = event.target.value;
  this.setState({name: value});
  if(!this.state.nameTouched){
    this.setState({nameTouched: true})
  }

  let nameValid = !value.includes('.') && value.trim() !== '';
  console.log('name valid: ', nameValid);
  this.setState({nameValid: nameValid}, ()=>{
    this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
  });

  //this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
}

handleEmailInputChange = (event) => {
  let value = event.target.value;
  this.setState({email: value});
  if(!this.state.emailTouched){
    this.setState({emailTouched: true})
  }

  let re = /\S+@\S+\.\S+/;
  let emailValid =  re.test(value);
  console.log('emailValid: ', emailValid );
  this.setState({emailValid: emailValid}, ()=>{
    this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
  });

  //this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
}

handlePhoneInputChange = (event) => {
  let value = event.target.value;
  this.setState({phone: value});
  if(!this.state.phoneTouched){
    this.setState({phoneTouched: true})
  }

  console.log('length: ', value.length);
  let phoneValid = value.length === 11;
  console.log('phone valid', phoneValid);
  this.setState({phoneValid: phoneValid}, ()=>{
    this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
  });



}

  render(){
    console.log(this.state.allValid);
    let output = (
      <div style={{display: "block"}}>
        <div className="row">
          <p>Name:</p>
          {this.state.name}
        </div>
        <div className="row">
          <p>Email:</p>
          {this.state.email}
        </div>
        <div className="row">
          <p>Phone:</p>
          {this.state.phone}
        </div>
      </div>
    )
    return(
      <Aux>
        <div className='.FormBuilder'>
          <h1>Validation Form</h1>
          <br />
          <form onSubmit={this.orderHandler}>
            <div>
              <label>Name</label>
              <input
                className={this.state.nameValid==false && this.state.nameTouched==true ? "input-warning" : null}
                type="text"
                onChange={this.handleNameInputChange}
                placeholder="Enter your full name"/>
            </div>
            <br />
            <div>
              <label>Email</label>
              <input
                className={this.state.emailValid==false && this.state.emailTouched==true ? "input-warning" : null}
                type="email"
                onChange={(event) => this.handleEmailInputChange(event)}
                placeholder="Enter valid email"/>
            </div>
            <br />
            <div>
              <label>Phone</label>
              <input
                className={this.state.phoneValid==false && this.state.phoneTouched==true ? "input-warning" : null}
                type="text"
                onChange={this.handlePhoneInputChange}
                placeholder="Enter an 11 digit number"/>
            </div>
            <br />
            <button disabled={!this.state.allValid}>Submit</button>
          </form>
          {this.state.showOutput ? output : null}
        </div>
      </Aux>
    );
  }
}

export default Builder;
