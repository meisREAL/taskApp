import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Overview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.tasks.map((task) => {
                    return <li>{task.text}</li>
                })}
            </ul>
        );
    }
}

export default Overview

