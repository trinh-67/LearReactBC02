import React, { Component } from "react";

export default class SanPhamDemo extends Component {
  render() {
      let {sanPham} = this.props;

    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
          </div>
        </div>
      </div>
    );
  }
}
