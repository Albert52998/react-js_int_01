import React from 'react';
import {Component} from 'react';

import Name from './classes/Name';
import Price from './classes/Price';
import Description from './classes/Description';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Name name = {this.props.name} />
                <Price price = {this.props.price} />
                <Description description = {this.props.description} />
            </div>
        )
    }
}


export default Product;