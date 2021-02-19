import React, { Component } from 'react'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTProductList from './BTProductList'
import BTSlider from './BTSlider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTSlider />
                <BTProductList />
                <BTFooter />
            </div>
        )
    }
}
