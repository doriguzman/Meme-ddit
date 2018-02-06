import React, { Component } from 'react';

class NewLink extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            url: ''
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
2

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewLink(this.state);

        this.setState({
            title: '',
            url: ''
        })
    }


    render() {
        const { state } = this.props;
        return (
            <div>
                Title: <input type='text' name='title' onInput={this.onInput} />
                URL: <input type='text' name='url' onInput={this.onInput} />
                <button onClick={this.onSubmit}> Submit </button>
            </div>
        );
    }
}


export default NewLink;
