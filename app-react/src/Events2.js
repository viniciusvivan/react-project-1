import React, { Component } from 'react';

export default class Events2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: []
        }
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        });

        console.log('Estate', this.state)
    };

    insertToData = () => {
        const arr = this.state.data;
        arr.push(this.state.name);
        this.setState( state => ({
           name: '',
           data: arr
        }));
        console.log(this.state);
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <input onChange={this.handleChange} type="text" name="name" id="name" placeholder="Digite"/>
                <input onChange={this.handleChange} type="text" name="age" id="age" placeholder="Digite"/>
                <button type="button" onClick={this.insertToData}>Ok!</button>
                <ul>
                    { data.map(item => (
                        <li key={item}>{item}</li>
                    ))

                    }
                </ul>
            </div>
        )
    }
}