import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }


    render() {

        var { isChecked } = this.state;

        return (
            <div>
                <h1>
                    Contact <br />
                    <button type="button" className="btn btn-primary" onClick={() => this.onClick(true)}>Agree</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.onClick(false)}>Not agree</button>
                    <Prompt when={isChecked} message={location => (`Location ${location.pathname}`)} />
                </h1>
            </div>
        )
    }
}

export default Contact;
