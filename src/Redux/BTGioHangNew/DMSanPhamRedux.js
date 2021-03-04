import React, { Component } from 'react';

//ket noi redux
import {connect} from "react-redux";
class DMSanPhamRedux extends Component {
  render() {
    let {sanPham} = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} height = {300} width= {100} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button onClick = {() => {
            this.props.themGioHang(sanPham);
          }} className ="btn btn-danger ml-2">Them Gio Hang</button>
        </div>
      </div>
    );
  }
}

//ham su dung de lay state tu redux ve tao thanh props cua component

const mapStateToProps = (state) => {
  return {
    
  }
}

//ham tao ra props la ham xu ly su kien dau du lieu len redux 
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      //tao ra spGioHang tu spClick
      const spGioHang = {...sanPhamClick,soLuong:1}
      //dua du lieu len redux store
      const action = {
        type: 'Them gio hang', //thuoc tinh bac buoc khi gui du lieu len redux
        spGioHang:spGioHang
      }

      //dung ham dispatch sua du lieu len reducer (redux store)
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DMSanPhamRedux);
