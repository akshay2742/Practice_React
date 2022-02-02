import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
      console.log("PureComp render")
    return <div>This is a Pure Component made by {this.props.name}</div>;
  }
}

export default PureComp;
