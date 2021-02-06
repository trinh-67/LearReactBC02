import React, { Component } from 'react'


export default class RenderWithMap extends Component {

    mangSinhVien = [
        {ma:1,ten:'Nguyễn văn a'},
        {ma:2,ten:'Nguyễn văn b'},
        {ma:3,ten:'Nguyễn văn c'}
    ]


    renderSinhVien = () => {
        // const arrJSX = [];
        // for(let index = 0 ;index < this.mangSinhVien.length; index++) {
        //     //Mỗi lần duyệt lấy ra 1 đôi1 tượng sinh viên trong mảng this.mangSinhVien
        //     let tagP = <li key={index}>{this.mangSinhVien[index].ten}</li>;
            
        //     arrJSX.push(tagP); //arrJSX [<p key={index}>${this.mangSinhVien[index].ten}</p>,<p>${this.mangSinhVien[index].ten}</p>]
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
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien,index) => {
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td><button className="btn btn-danger">Xoá</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

