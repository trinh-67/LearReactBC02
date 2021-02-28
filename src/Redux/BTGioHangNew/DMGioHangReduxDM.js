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
                                   <td>{spGioHang.gia}</td>
                                   <td>{spGioHang.gia * spGioHang.soLuong}</td>
                               </tr>
                           )
                       })}
                   </tbody>
               </table>
            </div>
        )
    }
}

//chuyen state tren redux tro thanh props cua component

//State đại diện cho rootReducer
const mapStateToProps = (state) =>{
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}

//ket noi giua component va redux
export default connect(mapStateToProps)(DMGioHangReduxDM)
