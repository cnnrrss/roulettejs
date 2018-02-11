// import * as React from 'react';
import { RepositoryEntity } from '../model/repository';
import React, { FunctionComponent, CSSProperties, HTMLAttributes, MouseEvent, Component } from 'react';
import ReactDom, { render } from 'react-dom';

interface Props {
    repository: RepositoryEntity,
    style?: CSSProperties,
};

interface State {
    hover?: boolean,
}

// const lineStyle: CSSProperties = {
//     lineHeight: '36px',
//     border: 'white',
//     textOverflow: 'ellipsis',
//     overflow: 'hidden',
//     paddingLeft: '4em',
//     borderRadius: '2em'
// };

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
            //     background: -webkit - linear - gradient(to right, #282c34, #5B86E5);
            // background: linear - gradient(to right, #282c34, #5B86E5);
            };
            // , borderRadius: '2em'
        }

        return (
            <div 
                className="grid-table-row" 
                // ...lineStyle,
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