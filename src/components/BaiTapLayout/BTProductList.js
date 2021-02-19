import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {

     mangSanPham = [
        { MaSP: 1, TenSP: "Sony Xperia XZ2",hinhAnh:'./img/sp_blackberry.png', Gia: 17500000 },
        { MaSP: 2, TenSP: "Sony Xperia XZ1",hinhAnh:'./img/sp_iphoneX.png', Gia: 15500000 },
        { MaSP: 3, TenSP: "Sony Xperia XZPremium",hinhAnh:'./img/sp_blackberry.png', Gia: 18500000},
        { MaSP: 4, TenSP: "Google Pixel XL", hinhAnh:'./img/sp_note7.png', Gia: 27500000 },
      ];

      renderSanPham = () => {
          //hiển thị giao diện div các sản phẩm dựa vào this.mangSanPham
          let arrDiv = this.mangSanPham.map((sp,index) => {
              return <div key={index} className="col-3">
                  <BTProductItem sanPham = {sp}/>
              </div>
          });
          return arrDiv;
      }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">BEST SMART PHONE</h1>
                <div className="row">
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    {/* <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div>
                    <div className="col-3">
                        <BTProductItem />
                    </div> */}
                </div>
          
            </div>
        )
    }
}
