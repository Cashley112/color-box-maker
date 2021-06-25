import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxArray: []
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }
    addBox(box) {
        this.setState(state => ({
            boxArray: [...state.boxArray, {...box, id: uuidv4()}]
        }))
    }
    removeBox(boxId) {
        let newBoxArray = this.state.boxArray.filter(box => (
            box.id !== boxId
        ))
        this.setState(state => ({
            boxArray: newBoxArray
        }))
    }
    render () {
        return (
            <div>
                <h1>Color Box Maker</h1>
                <BoxForm 
                    addBox={this.addBox}
                />
                {this.state.boxArray.map(box => (
                    <Box 
                    boxStyles={{box}}
                    key={box.id}
                    removeBox={this.removeBox}
                    />
                ))}
            </div>
        )
    }
}

export default BoxList