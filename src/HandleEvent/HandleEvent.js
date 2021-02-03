import React, { Component } from 'react'

export default class HandleEvent extends Component {

handleClick = () => {
    alert('Hello BC01');
};
showMessage = (name) => {
    alert('hello' + name);
};
render() {
        return (
            <div>
                {/** Cach 1 truyền callback trực tiếp*/}
               <button id="btnClickMe" className="btn btn-success" onClick={this.handleClick}>Click me</button>
               <button id="btnClickMe" className="btn btn-success" onClick={this.showMessage.bind(this,"Si")}>ShowMessage</button>
               {/*Cach 2 truyền hàm nặc danh*/ }
               <button onClick = {() => {
                   this.showMessage('Phu')
               }}>Show Message</button>
            </div>
        )
    }
}
