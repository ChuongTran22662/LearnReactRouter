import React, { Component } from 'react';

class Product extends Component {
    render() {

        var { match } = this.props;
        var name = match.params.slug;

        return (
            <div>
                <h1>
                    Product {name}
                </h1>
            </div>
        )
    }
}

export default Product;
