import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Parent"
        }
        this.ClickHandler=this.ClickHandler.bind(this)
    }
    
    ClickHandler(childname){
        alert(`Hello ${this.state.message} from ${childname}`)
    }

    render() {
        return (
            <div>
                <ChildComp functionClick={this.ClickHandler} />
            </div>
        )
    }
}

export default ParentComp
