import React, { Component } from 'react'

export default class ThongTinSinhVienDM extends Component {
  render() {

    let {sv1} = this.props;
    return (
      <div className="card text-left">
        <img width="100" height="180" className="card-img-top" src="https://picsum.photos/100/180" alt="images" />
        <div className="card-body">
          <h4 className="card-title">{sv1?.ten}</h4>
          <p className="card-text">{sv1?.tuoi}</p>
        </div>
      </div>
    );
  }
}
