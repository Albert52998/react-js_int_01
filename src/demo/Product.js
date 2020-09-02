import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.price}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Product;