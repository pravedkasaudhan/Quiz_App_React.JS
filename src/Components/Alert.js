import React, { Component } from 'react';
import './Alert.css';

export class Alert extends Component {
    render() {
        return (
            <div className="Alert">
                        <strong>{this.props.alert}</strong>
            </div>
        )
    }
}

export default Alert
