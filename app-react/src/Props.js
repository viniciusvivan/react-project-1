import React, { Component } from 'react';
import Panel from "./Panel";

export default class Props extends Component {
    constructor(props) {
        super(props);
        const { attr, attr2, attr3 } = this.props;
        console.log( attr, attr2, attr3 );
    }

    render() {
        const {attr, attr2, attr3 } = this.props;

        return (
            <div>
                { attr === 'p' ? <p>Props</p> : <h1>PROPS</h1> }
                <Panel headerColor='red' borderColor='blue' headerText='This is a header' data='Vizak Software'/>
            </div>
        );
    }
}