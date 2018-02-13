import React, { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export class Form extends Component {

    submitForm = () => {
    }

    render() {
        return (
            <div className="grid-form">
                <Input/>
                <Button className="search-button" label="Search"/>
                <Button className="random-button" label="Random" />
            </div>
        )
    }
}