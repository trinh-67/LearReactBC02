import React, { Component } from 'react'

//ket noi redux
import { connect} from "react-redux"

 class SanPhamRedux extends Component {
    render() {
        let { sanPham,themGioHang } = this.props;
        
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" style={{ height: 300 }} src={sanPham.hinhAnh} alt={sanPham. hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                        <button onClick={()=>{
                            themGioHang(sanPham)
                        }} className="btn btn-danger ml-2" >Thêm giỏ hàng</button>
                        
                    </div>
                </div>
            </div>

        )
    }
}


//ham dungd e lay state tu redux ve tao thanh props cua component
const mapStateToProps = (state) => {
    return {
        
    }
}

//Ham tao ra props la ham xu ly su kien dau du lieu len redux
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            console.log('sp duoc clik',sanPhamClick);
            //tao ra spGioHang tu spClick
            const spGioHang = {
                ...sanPhamClick, soLuong:1
            }
            //dua du lieu len redux store
            const action = {
                type: 'Them gio hang', //thuoc tinh bac buoc khi gui du lieu len redux
                spGioHang:spGioHang
            }

            //sung ham dispatch sua du lieu len reducer (redux store)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux)
