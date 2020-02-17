import React, { Component } from 'react';

class Form extends Component {
  formSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <form onSubmit={(e) => this.formSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
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
