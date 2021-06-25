import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        boxStyles: { height: '50px', width: '50px', backgroundColor: 'purple' }
    }
    render () {
        return (
            <div className="Box" style={this.props.boxStyles.box}>

            </div>
        )
    }
}

export default Box;