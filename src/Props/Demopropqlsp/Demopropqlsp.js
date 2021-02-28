import React, { Component } from 'react'
import DemoSanPham from './DemoSanPham';

export default class Demopropqlsp extends Component {
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
    //dùng object lưu trữ thông tin chi tiết điện thoại
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
        },
    };
    handleDetail = (click) => {
        this.setState({
            spChiTiet: click,
        });
    }
    handleDetail = (click) => {
        this.setState({
            spChiTiet: click,
        });
    }
   

    

    renderSanPham = () => {
        return this.mangSanPham.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <DemoSanPham sanPham={item} change={this.handleDetail}/>
                </div>
            );
        });
    };

    render() {
        let { maSP,tenSP,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom,giaBan,hinhAnh} = this.state.spChiTiet;
        return (
            <div className="container">
                <h1>Danh Sach San Pham</h1>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3 className="text-center text-primary">{tenSP}</h3>
                        <img src={hinhAnh} alt="" style={{ height: "348px"}}/>
                    </div>
                    <div className="col-8">
                        <h3 className="text-center text-primary">Thong So Ky Thuat</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn Hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ Điều Hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera Trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
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
