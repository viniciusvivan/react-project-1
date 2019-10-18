import React, { Component } from 'react';

export default class Clock extends Component {

    constructor(props){
        super(props);

        this.state = {
            time: new Date()
                .toLocaleString('en', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12:  true
                })
        }
    }

    updateClock(){
        this.setState({
            time: new Date()
                .toLocaleString('en', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12:  true
                })
        });
    }

    componentDidMount(){
        this.timer = setInterval(() => this.updateClock(), 1000)
    }

    componentWillMount(){

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { time } = this.state;

        return (
            <h1> {time} </h1>
        );
    }
}