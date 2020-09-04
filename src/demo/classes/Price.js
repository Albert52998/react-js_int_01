import React from 'react';

export default class Price extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        price: [this.props.price, '$']
    }

    handleButtonClick = () => {
        let {price} = this.state;
        
        if(price[1] === '$') {
            price = price[0]*487;
            price = [price, '֏'];
        }
        else if(price[1] === '֏') {
            price = price[0]/487;
            price = [price, '$'];
        }

        console.log(price);

        this.setState({price});
    }

    render() {
        return (
            <div>
                <h2>{this.state.price}</h2>
                <button onClick={()=> this.handleButtonClick()}>Change the currency</button>
            </div>
        );
    }
}