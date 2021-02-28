import React, { Component } from "react";
import BTHeader from './BTHeader'
import BTProducList from "./BTProducList";
import BTProductItem from "./BTProductItem";
import BTProduct from "./BTProduct";
export default class BaiTapLayout extends Component {
  render() {
    return <div>
      <BTHeader />
      <BTProducList />
      <BTProduct/>
    </div>;
  }
}
