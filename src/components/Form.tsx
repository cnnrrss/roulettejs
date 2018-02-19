import React, { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface FormState {
    value?: string
}

// Declare the class to use Typescript generics
export class Form extends Component<{}, FormState> {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        console.log(event.target.value, this.state.value, "help");
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <form className="grid-form" onSubmit={this.handleSubmit}>
                {/* https://reactjs.org/docs/lifting-state-up.html */}
                <Input value={this.state.value} onChange={this.handleChange} />
                <Button className="search-button" label="Search" type="submit" onClick={this.handleSubmit}/>
                <Button className="random-button" label="Random" />
            </form>
        )
    }
}