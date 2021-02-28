import React, { Component } from 'react'

export default class GioHang extends Component {



    render() {
        let {gioHang} = this.props;
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Giá SP</th>
                            <th>Số lượng </th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {gioHang.map((spGH,index) => {
                            return <tr key={index}>
                                  <th>{spGH.maSP}</th>
                            <th>{spGH.tenSP}</th>
                            <th><img src={spGH.hinhAnh} width={50} height={50} /></th>
                            <th>{spGH.gia}</th>
                            <th>
                                <button className="btn btn-primary mr-1" onClick={() => {
                                    this.props.tangGiamGH(spGH.maSP,1)//true
                                }}>+</button>
                                    {spGH.soLuong} 
                                <button className="btn btn-primary ml-1" onClick={() => {
                                    this.props.tangGiamGH(spGH.maSP,-1)
                                }}>-</button>
                            </th>
                            <th>
                                {(spGH.gia * spGH.soLuong).toLocaleString()}
                            </th>
                            <th><button className="btn btn-danger" onClick={() =>this.props.xoaSanPham(spGH.maSP)}>Xoá</button></th>
                        </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>{this.tinhTongTien()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
    tinhTongTien = () => {
        let tongTien = this.props.gioHang.reduce((tongTien,spGH,index) => {
            tongTien += spGH.soLuong * spGH.gia;
            return tongTien;
        },0);
        return tongTien.toLocaleString();//so dau trong tong tien
    }
}
