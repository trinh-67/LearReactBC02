import React, { Component } from 'react'

export default class DemoNewProps extends Component {

    mangSinhVien = [
        {ma:'sv01',tên:'Khai',tuổi:'29'},
        {ma:'sv02',tên:'Si',tuổi:'25'},
        {ma:'sv03',tên:'Phu',tuổi:'25'},
    ]

    renderSinhVien = () => {
        const result = this.mangSinhVien.map((sv,index) => {
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
