import React, { Component } from 'react';
import axios from 'axios';

interface UserProps {}

interface UserState {
  token: string;
}

class IsAuthenticate extends Component<UserProps, UserState> {
  constructor(props: Readonly<UserProps>) {
    super(props);
    this.state = {
      token: localStorage.getItem('token')!,
    };
    this.checkAuth();
  }

  checkAuth = async () => {
    const { token } = this.state;
    try {
      const { data: result } = await axios.get(
        'http://localhost:3000/ping/is-authenticated',
        {
          headers: { access_token: token },
        },
      );
      if (result) {
        localStorage.setItem('token', result.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { token } = this.state;
    if (token) {
      return (
        <div>
          <h2>Is Authenticate</h2>
        </div>
      );
    }
    return (
      <div>
        <h2>Not Authenticate</h2>
      </div>
    );
  }
}

export default IsAuthenticate;
