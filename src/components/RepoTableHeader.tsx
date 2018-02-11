import React, { Component } from 'react';

export type RepoTableHeaderProps = {
    className?: string,
    headerValues?: string[],
} & typeof defaultProps;

const defaultProps = {
    className: 'grid-table-row',
    headerValues: ['Name', 'Stars', 'Url'],
};

export class RepoTableHeader extends Component<RepoTableHeaderProps> {
    static defaultProps = defaultProps;

    render() {
        const {
            className,
            headerValues,
            ...otherProps
        } = this.props;

        return (
            <div className={className}>
                {headerValues.map(header => (
                    <div className="grid-table-cell"> {header} </div>
                ))}
            </div>  
        )
    }
}