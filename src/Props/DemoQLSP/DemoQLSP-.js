import React, { Component } from "react";
import SanPhamDemo from "./SanPhamDemo";

export default class DemoQLSP extends Component {

   state = {
       spChiTiet: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
       }//dun object luu tru thong tin dien thoai chi tiet
   }

  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  renderSanPham = () => {
    return this.mangSanPham.map((sanpham, index) => {
      return (
        <div key={index} className="col-4">
            <SanPhamDemo sanPham={sanPham}/>
          {/* <div classname="card text-left">
            <img classname="card-img-top" src={sanpham.hinhAnh} alt="{sanpham.hinhAnh}" />
            <div classname="card-body">
              <h4 classname="card-title">{sanpham.tenSP}</h4>
              <p classname="card-text">{sanpham.giaBan}</p>
              <button onClick={() => {
                  this.xemChiTiet(sanpham);
              }} className="btn btn-success">Xem chi tiet</button>
            </div>
          </div> */}
        </div>
      );
    });
  };

xemChiTiet = (sanphamClick) => {
    //setstate
    console.log(sanphamClick);
    this.setState({
        spChiTiet:sanphamClick
    })
}

  render() {
    let {hinhAnh,manHinh,heDieuHanh,ram,rom,cameraSau,cameraTruoc,tenSP} = this.state.spChiTiet;
    return (
      <div className="container">
        <h3 className="text-center display-4">Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>

        <div className="row mt-5">
            <div className="col-4">
                <h3>{tenSP}</h3>
                <img  className="card-img-top" style={{ height: 300 }} src={hinhAnh} alt={hinhAnh}/>
            </div>
            <div className="col-8">
                <h3 className="text-center">Thong So Ky Thuat</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Man HInh</th>
                            <th>{manHinh}</th>
                        </tr>
                        <tr>
                            <th>He Dieu Hanh</th>
                            <th>{heDieuHanh}</th>
                        </tr>
                        <tr>
                            <th>Camera truoc</th>
                            <th>{cameraTruoc}</th>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <th>{cameraSau}</th>
                        </tr>
                        <tr>
                            <th>Ram</th>
                            <th>{ram}</th>
                        </tr>
                        <tr>
                            <th>Rom</th>
                            <th>{rom}</th>
                        </tr>
                       
                    </thead>
                </table>
            </div>
        </div>
      </div>
    );
  }
}
