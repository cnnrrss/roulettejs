import React, { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button';
// import { RepoTable } from "./RepoTable";

export class Form extends Component {

    submitForm = () => {
        const endpoint = ``
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