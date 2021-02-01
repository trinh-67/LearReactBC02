import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
          <div className="container-fluid">
            <section id="smartphone" className="container-fluid pt-5 pb-5">
              <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                <div className ="col-3">
                     <Product />
                </div>
                <div className ="col-3">
                     <Product />
                </div>
                <div className ="col-3">
                     <Product />
                </div>
                <div className ="col-3">
                     <Product />
                </div>
                </div>
            </section>
          </div>
        );
    }
}
