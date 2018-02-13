import { RepositoryEntity } from '../model/repository';
import React, { FunctionComponent, CSSProperties, Component } from 'react';

import './../styles/Table.scss'; 

interface Props {
    repository: RepositoryEntity,
    style?: CSSProperties,
};

interface State {
    hover?: boolean,
}

export const RepoTableRow: FunctionComponent<Props> = ({repository}) => {
    return (
        <TradeRow repository={repository} />
    );
}

export class TradeRow extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    }

    confirmDelete = () => {
        window.open(this.props.repository.url);
    }

    render() {
        let linkStyle;
        if (this.state.hover) {
            linkStyle = { 
                backgroundColor: '#4095c6',
                borderCollapse: 'collapse',
            };
        }

        return (
            <div 
                className="grid-table-row" 
                style={{...linkStyle}} 
                onClick={this.confirmDelete.bind(this)}
                onMouseEnter={this.toggleHover.bind(this)} 
                onMouseLeave={this.toggleHover.bind(this)}>
                <div className="grid-table-cell">{this.props.repository.name}</div>
                <div className="grid-table-cell">{this.props.repository.description}</div>
                <div className="grid-table-cell">{this.props.repository.stars}</div>
            </div>
        )
    }
}