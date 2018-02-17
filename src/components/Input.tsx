import React, { Component, EventHandler, ChangeEvent } from 'react';

export type InputProps = {
    className?: string,
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>,
    defaultValue?: string,
    placeholder?: string,
    query?: string
} & typeof defaultProps;

const defaultProps = {
    className: 'search-input',
    placeholder: 'Endless frameworks await..',
    query: 'framework+NOT+\"hello+world\"+NOT+\"awesome\"+NOT+\"todo\"+language:javascript'
};



export class Input extends Component<InputProps> {
    static defaultProps = defaultProps;

    handleChange(event) {
        this.setState({ query: event.target.value + '+' + this.props.query})
    }

    render() {
        const {
            className,
            onChange,
            placeholder,
            ...otherProps
        } = this.props;
        return (
            <input className={className} placeholder={placeholder} onChange={this.handleChange.bind(this)} />
        )
    }
}