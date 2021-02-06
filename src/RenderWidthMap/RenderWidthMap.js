import React, { Component } from 'react'

export default class RenderWidthMap extends Component {
    mangSinhVien = [
        {ma: 1,ten:'Nguyễn Văn a'},
        {ma: 2,ten:'Nguyễn Văn b'},
        {ma: 3,ten:'Nguyễn Văn c'},
    ]

    renderSinhVien = () => {
        // const arrJSX = [];
        // for(let index = 0; index < this.mangSinhVien.length; index++){
        //     //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên trong mảng this.mangSinhVien
        //     let tagP = <p key={index} > {this.mangSinhVien[index].ten}</p>;
        //     arrJSX.push(tagP);//arrJSX
        // }
        // console.log('arrJSX',arrJSX);
        // return arrJSX;

        const arrJSX = this.mangSinhVien.map((sinhVien,index) => {
            return <li key={index}>
                {sinhVien.ten}
            </li>
        });
        return arrJSX;
    }
    render() {
        return (
            <div className="container">
                <ul>
                    {this.renderSinhVien()}
                </ul>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Sinh Viên</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien,index) => {
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

