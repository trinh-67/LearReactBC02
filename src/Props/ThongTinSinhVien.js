import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {




    render() {
        //this.props là thuộc tính có sẵn của react Component 

        //this.state != this.props 
        // Giống nhau: Dùng để binding dữ liệu lên giao diện và đều là thuộc tính có sẵn của react class component
        //Khác nhau: 
        //this.state quản lý các trạng thái của biến làm thay đổi giao diện
        //this.props nhận giá trị từ component cha truyền vào
        //this.state (=> gọi phương thực setState) có thể gán lại giá trị được nhưng this.props thì không cho phép gán lại giá trị 
        // let {ten,tuoi,ma} = this.props.sinhVien;
        let {sv1} = this.props;
        return (
            <div style={{backgroundColor:this.props.bgColor }} className="card text-white bg-dark">
                <img width="100" height="180" className="card-img-top" src="https://picsum.photos/100/180" alt="abc" />
                <div className="card-body">
                    <h4 className="card-title">{sv1?.ten}</h4>
                    <p className="card-text">{sv1?.tuoi}</p>
                </div>
            </div>
        )
    }
}
