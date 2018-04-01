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
      allValid: false
    };
  }

orderHandler = (event) => {
  event.preventDefault();
  this.setState({showOutput: true})
}

handleNameInputChange = (event) => {

  let value = event.target.value;
  this.setState({name: value});

  let nameValid = !value.includes('.') && value.trim() !== '';
  console.log('name valid: ', nameValid);
  this.setState({nameValid: nameValid});

  this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
}

handleEmailInputChange = (event) => {
  let value = event.target.value;
  this.setState({email: value});

  let re = /\S+@\S+\.\S+/;
  let emailValid =  re.test(value);
  console.log('emailValid: ', emailValid );
  this.setState({emailValid: emailValid});

  this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});
}

handlePhoneInputChange = (event) => {
  let value = event.target.value;
  this.setState({phone: value});

  console.log('length: ', value.length);
  let phoneValid = value.length === 11;
  console.log('phone valid', phoneValid);
  this.setState({phoneValid: phoneValid});

  this.setState({allValid: this.state.nameValid && this.state.emailValid && this.state.phoneValid});

}

  render(){
    console.log(this.state.allValid);
    let output = (
      <Output
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}/>
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
                className={this.state.nameValid ? null : "input-warning"}
                type="text"
                onChange={this.handleNameInputChange}
                placeholder="Enter your full name"/>
            </div>
            <br />
            <div>
              <label>Email</label>
              <input
                className={this.state.emailValid ? null : "input-warning"}
                type="email"
                onChange={(event) => this.handleEmailInputChange(event)}
                placeholder="Enter valid email"/>
            </div>
            <br />
            <div>
              <label>Phone</label>
              <input
                className={this.state.phoneValid ? null : "input-warning"}
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
