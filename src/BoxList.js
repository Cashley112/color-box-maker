import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
    render () {
        return (
            <div>
                <h1>Color Box Maker</h1>
                <BoxForm />
                <Box />
            </div>
        )
    }
}

export default BoxList