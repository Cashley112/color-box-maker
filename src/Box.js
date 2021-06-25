import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    static defaultProps = {
        boxStyles: { height: '50px', width: '50px', backgroundColor: 'purple' }
    }
    handleClick() {
        this.props.removeBox(this.props.boxStyles.box.id);
    }
    render () {
        return (
            <div className="Box" style={this.props.boxStyles.box}>
                <button style={{backgroundColor: this.props.boxStyles.box.backgroundColor}} onClick={this.handleClick}>x</button>
            </div>
        )
    }
}

export default Box;