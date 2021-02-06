import React, { Component } from 'react'

export default class BaiTapChonXeDe extends Component {

    state = {
        imgSrc: "./img/car/products/red-car.jpg",
    };

changeColor = (color) => {
    //thay doi gia tri dua vao bien mau
    this.setState({
        imgSrc: `./img/car/products/${color}-car.jpg`,
    });
    //ham setstate thay đổi biến this.state,imgSrc => đồng thời render lại giao diện
}

    render() {
        return (
            <div className="container">
                <div className="row">

                </div>
            </div>
        )
    }
}
