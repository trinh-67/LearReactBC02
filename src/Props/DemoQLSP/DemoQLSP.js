import React, { Component } from 'react'
import GioHang from '../GioHang'
import SanPhamDemo from './SanPhamDemo'


export default class DemoQLSP extends Component {
    
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
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
            // {maSP:1,hinhAnh:'./img/applephone.jpg',tenSP:'Iphone',gia:1000, soLuong:1}
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



    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div key={index}  className="col-4">
                <SanPhamDemo sanPham={sanPham} xemCT={this.xemChiTiet} themGioHang ={this.themGioHang}/>
            </div>
        });
    }

    

    //Hàm xử lý làm thay đổi state sẽ được đặt tại component chứa state
    themGioHang = (sanPhamClick) => {
        //Sau khi click thì tạo ra 1 sản phẩm giống object trong giỏ hàng
        let spGH = {
            maSP: sanPhamClick.maSP,
            tenSP: sanPhamClick.tenSP,
            gia: sanPhamClick.giaBan,
            soLuong:1,
            hinhAnh: sanPhamClick.hinhAnh
        }
        let gioHangUpdate =[...this.state.gioHang];
        //Xử lý kiểm trastate giỏ hàng có chứa dữ liệu sản phẩm đó khi click hay chưa => Nếu có thì tăng số lượng, không có thì thêm vào

        let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === sanPhamClick.maSP);

        if(indexSPGH !== -1) //Tìm thấy vị trí index
        {
            gioHangUpdate[indexSPGH].soLuong += 1;
        }else {
            gioHangUpdate.push(spGH)
        }
        // let gioHangUpdate = [...this.state.gioHang,spGH]


        this.setState({
            gioHang: gioHangUpdate
            //gioHang: ..giỏ hàng mới 
        })
    }

    xemChiTiet = (sanPhamClick) => {
        //setState 
        console.log(sanPhamClick);
       
        this.setState({
            spChiTiet:sanPhamClick
        })
        
    }

    //xu ly tang giam so luong
    tangGiamSoLuong = (maSP,soLuong) => {

        let gioHangUpdate = [...this.state.gioHang];
         //Bước1: tìm ra sp trong giỏ hàng dựa vào mà sản phẩm 
        let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP);
        //Bước 2: Tăng, Giảm số lượng
        if(index!== -1 ){
            gioHangUpdate[index].soLuong += soLuong ;//1
            //sp giam khg am
            if(gioHangUpdate[index].soLuong <= 0){
                alert('So luong khong hop le!');
                gioHangUpdate[index].soLuong -= soLuong;
                return;
            }
            
        }

         //Bước 3: setState cho gioHang
         this.setState({
             gioHang:gioHangUpdate
         });
    }

    xoaGioHang = (maSP) => {
        
        let gioHangUpdate = [...this.state.gioHang];
        gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== maSP);
        this.setState ({
            gioHang:gioHangUpdate
        })
        //setState sau khi xoá 
    }

    render() {
        let {hinhAnh,manHinh,heDieuHanh,ram,rom,cameraSau,cameraTruoc,tenSP} = this.state.spChiTiet;
        return (
            <div className="container">
                <h1 className="mt-2">Giỏ hàng</h1>

                <GioHang gioHang={this.state.gioHang} xoaSanPham={this.xoaGioHang} tangGiamGH = {this.tangGiamSoLuong}/>
                <h3 className="text-center display-4">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img className="card-img-top" style={{ height: 300 }} src={hinhAnh} alt={hinhAnh} />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Thông số kỹ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
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
        )
    }
}
