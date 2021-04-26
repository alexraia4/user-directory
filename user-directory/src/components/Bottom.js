import React, { Component } from 'react';

export default class Bottom extends Component {

    render () {
        return (
            <div className = "bottomPart">
                <button>Previous</button>
                <div className = "middleButtons">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <button onClick = {this.props.goUp}>Next</button>
            </div> 
        )
    }
}