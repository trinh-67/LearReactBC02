import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProducList extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];
  
  renderSanPham = () => {
    //hiển thị giao diện div các sản phẩm dựa vào this.mangSanPham
    let arrDiv = this.mangSanPham.map((sp,index) => {
      return <div className="col-3" key={index}>
        <BTProductItem sanPham={sp}/>
      </div>
    });
    return arrDiv;
  }


  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            {this.renderSanPham()}
            {/* <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
