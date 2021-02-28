import React, { Component } from 'react'
import SanPhamDemo from './SanPhamDemo'

export default class DemoNew extends Component {
    state = {
        spChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },//dùng object lưu trữ thông tin điện thoại chi tiết
        gioHang: [
            {maSP:1,hinhAnh:'./img/applephone.jpg',tenSP:'Iphone',gia:1000, soLuong:1}
        ]

    }

    mangSanPham = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]
 //ham xu ly lam thay doi state se duoc dat tai component chua state
 themGioHang = (sanPhamClick) => {
     //sau khi click thi tao ra 1 san pham giong object trong gio hang
     let spGH = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        gia: sanPhamClick.giaBan,
        soLuong:1,
        hinhAnh: sanPhamClick.hinhAnh
     }
     let gioHangUpdate = [...this.state.gioHang];
     let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === spGH.maSP);
     if(indexSPGH !== -1) {//tim thay vi tri index
         //san pham trong gio hang 
         gioHangUpdate[indexSPGH].soLuong += 1;
     }else {
         gioHangUpdate.push(spGH)
     }
     //
     this.setState({
         gioHang: gioHangUpdate
     })
     
 }


       

        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
