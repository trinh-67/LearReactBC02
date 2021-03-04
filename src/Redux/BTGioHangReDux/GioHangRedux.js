import React, { Component } from "react";
//kết nối react component với redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log(this.props.gioHang, "gioHang");
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
            {this.props.gioHang.map((spGioHang, index) => {
              return (
                <tr key={index}>
                  <td>{spGioHang.maSP}</td>
                  <td>{spGioHang.tenSP}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, 1);
                      }}
                      className="btn btn-primary mr-2"
                    >
                      +
                    </button>
                    {spGioHang.soLuong}
                    <button
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, -1);
                      }}
                      className="btn btn-primary ml-2"
                    >
                      -
                    </button>
                  </td>
                  <td>{spGioHang.giaBan}</td>
                  <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.xoaSanPham(spGioHang.maSP);
                      }}
                    >
                      Xoa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//Chuyển state trên redux trở thành props của component

//State đại diện cho rootReducer
const mapStateToProps = (state) => {
  //Tạo Props từ state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};

//
const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      console.log("object", maSP, soLuong);
      //tao action
      const action = {
        type: "Thay_doi_so_luong",
        maSP: maSP,
        soLuong: soLuong,
      };
      //Dua action len reducer
      dispatch(action);
    },
    xoaSanPham: (maSP) => {
      //tao ra action
      const action = {
        type: "Xoa_SP",
        maSP:maSP,
      };
      dispatch(action);
    },
  };
};

//kết nối giữa component và redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
