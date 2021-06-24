import React, { Component } from 'react'
import './BoxForm.css'

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 0, width: 0, bgColor: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({ height: 0, width: 0, bgColor: "" });
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height: </label>
                <input 
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor="width">Width: </label>
                <input 
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor="bgColor">Background Color: </label>
                <input 
                    id="bgColor"
                    name="bgColor"
                    value={this.state.bgColor}
                    onChange={this.handleChange}
                />
                <button>Render Box</button>
            </form>
        )
    }
}

export default BoxForm;