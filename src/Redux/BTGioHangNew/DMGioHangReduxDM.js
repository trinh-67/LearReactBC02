import React, { Component } from 'react'

//ket noi react component voi redux store 
import { connect} from "react-redux";


 class DMGioHangReduxDM extends Component { 
    render() {
        return (
            <div className="container">
               <table className="table">
                   <thead>
                       <tr>
                           <th>Ma SP</th>
                           <th>Ten SP</th>
                           <th>So Luong</th>
                           <th>Gia</th>
                           <th>Thanh Tien</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.props.gioHang.map((spGioHang,index) => {
                           return (
                               <tr key={index}>
                                   <td>{spGioHang.maSP}</td>
                                   <td>{spGioHang.tenSP}</td>
                                   <td>{spGioHang.soLuong}</td>
                                   <td>{spGioHang.giaBan}</td>
                                   <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                               </tr>
                           )
                       })}
                   </tbody>
               </table>
            </div>
        )
    }
}

//Hàm chuyển state trên redux trở thành props của component
//state đại diện cho rootReducer
const mapStateToProps = (state) => {

    //Tạo props từ state redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}


//ket noi giua component va redux
export default connect(mapStateToProps)(DMGioHangReduxDM)
