import React from 'react';
import {Component} from 'react';

export default class Name extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}