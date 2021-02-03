import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: "./img/car/products/red-car.jpg",
    };

    changeColor = (color) => {
        //thay đổi giá trị hình dựa vào biến màu
        this.setState({
            imgSrc: `./img/car/products/${color}-car.jpg`,
        });
        // hàm setState thay đổi biến this.state.imgSrc => đồng thời render lại giao diện
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button onClick={(event) => {
                                    this.changeColor("red");
                                }} className="btn btn-danger">Red car</button>
                            </div>
                            <div className="col-4">
                                <button onClick = {(event) => {
                                    this.changeColor('silver')
                                }} className="btn btn-secondary">Silver car</button>
                            </div>
                            <div className="col-4">
                                <button onClick = {(event) => {
                                    this.changeColor('black')
                                }} className="btn btn-dark">Black car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
