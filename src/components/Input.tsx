import React, { Component, EventHandler, ChangeEvent } from 'react';

export type InputProps = {
    className?: string,
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>,
    defaultValue?: string,
    placeholder?: string
} & typeof defaultProps;

const defaultProps = {
    className: 'search-input',
    placeholder: 'Endless frameworks await..'
};

export class Input extends Component<InputProps> {
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            onChange,
            placeholder,
            ...otherProps
        } = this.props;
        return (
            <input className={className} placeholder={placeholder} />
        )
    }
}