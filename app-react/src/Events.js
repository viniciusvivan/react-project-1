import React, { Component } from 'react';

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        };

        /*this.clickMethod = this.clickMethod.bind(this);*/
    }

    clickMethod = () => {
        this.setState({
           clicked: this.state.clicked + 1
        });
        console.log(this.state.clicked)
    };

    render() {
        return (
            <div>
                <button onClick={this.clickMethod} type="button">Clique me</button>
            </div>
        )
    }
}