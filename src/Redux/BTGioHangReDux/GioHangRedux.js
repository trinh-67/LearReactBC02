import React, { Component } from 'react'
//kết nối react component với redux store
import { connect } from "react-redux";


class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang,'gioHang');
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Số Lượng</th>
                            <th>Giá</th>
                            <th>Thành Tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGioHang,index) => {
                            return <tr key={index}>
                                <td>{spGioHang.maSP}</td>
                                <td>{spGioHang.tenSP}</td>
                                <td>{spGioHang.soLuong}</td>
                                <td>{spGioHang.gia}</td>
                                <td>{spGioHang.gia * spGioHang.soLuong}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

//Chuyển state trên redux trở thành props của component  

//State đại diện cho rootReducer
const mapStateToProps = (state) => {
    //Tạo Props từ state redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}



//kết nối giữa component và redux
export default connect(mapStateToProps)(GioHangRedux)
