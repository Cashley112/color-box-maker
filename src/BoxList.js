import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
    render () {
        return (
            <div>
                <h1>Color Box Maker</h1>
                <Box />
            </div>
        )
    }
}

export default BoxList