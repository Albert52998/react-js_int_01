import React from 'react';

export default class Description extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.description}</p>
        );
    }
}