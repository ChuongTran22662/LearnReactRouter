import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {

        var products = [
            {
                id: 1,
                name: 'Iphone 7',
                price: 100000,
                slug: 'iphone7'
            },
            {
                id: 2,
                name: 'Iphone 8',
                price: 120000,
                slug: 'iphone8'
            },
            {
                id: 3,
                name: 'Iphone X',
                price: 150000,
                slug: 'iphone9'
            }
        ];

        var { match } = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item" > {product.id} - {product.name} - {product.price}</li>
                </NavLink>
            )
        })

        return (
            <div className="container">
                <h2>Danh sách sản phẩm</h2>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route component={Product} path="/Products/:slug" />
                </div>
            </div>
        )
    }
}

export default Products;
