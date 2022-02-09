import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
  render() {
    return <div>
        <UserConsumer>
            {(username) => <h2>Hello {username}</h2>}
        </UserConsumer>
    </div>
  

  }
}

export default ComponentF;
