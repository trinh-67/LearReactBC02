import React, { Component } from 'react'

export default class DMSanPhamRedux extends Component {
  render() {
    let {sanPham} = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} height = {300} width= {100} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button onClick = {() => {
            this.props.themGioHang(sanPham)
          }} className ="btn btn-danger ml-2">Them Gio Hang</button>
        </div>
      </div>
    );
  }
}
