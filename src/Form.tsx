import React, { Component } from 'react';
import axios from 'axios';

interface userProps {}

interface userState {
  [x: string]: any;
}
class Form extends Component<userProps, userState> {
  constructor(props: Readonly<userProps>) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    localStorage.removeItem('token');
  }

  formSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(
      `email : ${this.state.email} -> password : ${this.state.password}`
    );
    const email = this.state.email;
    const password = this.state.password;
    try {
      const { data: result } = await axios.post(
        `http://localhost:3000/users/login`,
        {
          username: email,
          password: password,
        }
      );
      if (result) {
        localStorage.setItem('token', result.token);
      }
      console.log(localStorage.getItem('token'));
    } catch (error) {
      console.error(error);
    }
  };

  valueChange = (e: { target: { id: string; value: any } }) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <form onSubmit={(e) => this.formSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => this.valueChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => this.valueChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
