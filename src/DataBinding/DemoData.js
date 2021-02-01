import React, { Component } from 'react'

export default class DemoData extends Component {

    //phuong thuc xu ly cho nut click
    handleShowMessage = (message) => {
        alert(message);
    }
   
    render() {
        let message = 'Hello CyberSoft 123';
        return (
            <div className="container">
                {/* <button onClick={this.handleShowMessage.bind(this,message)}>Show Message</button> */}
                <button onClick={() => this.handleShowMessage(message)}>Show Message</button>
            </div>
        )
    }
}
