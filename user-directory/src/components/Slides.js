import React, { Component } from 'react';
import Bottom from './Bottom.js';

export default class Slides extends Component {

    constructor() {
        super();
        this.state = {
            numberWeAt: 0
        }

        this.goUp = this.goUp.bind(this);

    }


    goUp() {
        console.log(this.state.numberWeAt);
        let num = this.state.numberWeAt + 1;
        if (num === this.props.peopleArr.length) {
            num = 0;
        }
        this.setState({numberWeAt: num});
    }

    goDown() {

    }

    render () {

        return (
            <div className = "content">
                <div className = "middlePart">
                    <div className = "nameSection">
                        <h1>{this.props.peopleArr[this.state.numberWeAt].name.first}</h1>
                        <h1>{this.props.peopleArr[this.state.numberWeAt].name.last}</h1>
                    </div>
                </div> 
                <Bottom goUp = {this.goUp}/>
            </div>
        )
    }
}