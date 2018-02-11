import React, { Component } from 'react';
import '../styles/Button.scss'

export type ButtonProps = {
    className?: string,
    label?: string,
    loading?: boolean;
    disabled?: boolean;
    testId?: string;
    buttonType?: 'primary' | 'positive' | 'negative' | 'muted' | 'naked';
    type?: 'button' | 'submit' | 'reset';
    href?: string;
} & typeof defaultProps;


const defaultProps = {
    className: 'search-button',
    label: 'Search',
    loading: false,
    disabled: false,
    buttonType: 'primary',
    type: 'button',
};

export class Button extends Component<ButtonProps> {
    static defaultProps = defaultProps;
    
    handleClick = () => {
        console.log('this is a click', this.props.className);
    }

    render() {
        const {
            className,
            label,
            buttonType,
            loading,
            disabled,
            href,
            type,
            ...otherProps
        } = this.props;

        return (
            <a className={className} onClick={this.handleClick}>
                {label}
            </a>
        )
    }
}