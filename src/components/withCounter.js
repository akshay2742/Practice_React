import React from "react";

const withCounter = (WrappedComponent, increaseValue) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          chnageClick = () => {
              this.setState((prevState) => ({
                  count: prevState.count + increaseValue
              }),() => {console.log(this.state.count)})
          }

        render() {
            return <WrappedComponent count={this.state.count} increaseCount={this.chnageClick} {...this.props}></WrappedComponent>
        }
    }
    return WithCounter
}

export default withCounter;