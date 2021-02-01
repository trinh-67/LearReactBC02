import React, { Component } from "react";
import style from './DataBinding.module.css';


export default class DataBinding extends Component {

    sinhVien = {
        id: 1,
        ten: 'Nguyễn Văn A'
    }

    renderSinhVien = () => {
        //Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
        return <div>
            id: {this.sinhVien.id} - tên: {this.sinhVien.ten}
        </div>
    }
  render() {
    let title = "helo"; //bien
    let sanPham = {
      //object
      ten: "Iphone",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    };
    return (
      <div>
          
          <p className={`text-center ${style.textGreen} ${style['txt-light']}`}>abc</p>
          <p style={{backgroundColor:'red',color:'white'}}></p>
          {this.renderSinhVien()}
          <h1>Họ Tên: {this.sinhVien.ten}</h1>
        <p id="title">{title}</p>
        <div classname="card text-left">
          <img classname="card-img-top" src={sanPham.hinhAnh} alt />
          <div classname="card-body">
            <h4 classname="card-title">{sanPham.ten}</h4>
            <p classname="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
