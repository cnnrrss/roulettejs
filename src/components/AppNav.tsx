import React, {Component} from 'react';

export class AppNav extends Component {
    render() {
        return (
            <div className="App-nav">
                <h1 className="logo"><a href="#">RouletteJs</a></h1>
                <ul className="main-nav">
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        )
    }
}