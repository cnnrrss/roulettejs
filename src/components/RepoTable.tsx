import React, { Component, CSSProperties } from 'react';
import { RepositoryEntity } from "../model/repository";
import { RepoTableRow } from "./RepoTableRow";
import { repositoryAPI } from '../api/repository';
import { RepoTableHeader } from './RepoTableHeader';
// import { RepoTableHeader } from "./RepoTableHeader"

interface State {
    repositories: RepositoryEntity[];
    isLoaded: boolean;
}

interface Props {
    query: string;
    order: string;
}

// &per_page\=100
const defaultSort = "&sort\\=stars\\&order\=desc\\";
const defaultQuery = "framework+NOT+\"hello+world\"+NOT+\"awesome\"+NOT+\"todo\"+language:javascript";

export class RepoTable extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            repositories: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        let query = this.props.query ? this.props.query : defaultQuery;
        let order = this.props.order ? this.props.order : defaultSort;
        repositoryAPI.fetchAsync(query, order)
            .then((response) => {
                this.setState({
                    repositories: response,
                    isLoaded: true
                });
            })
    }

    render() {
        const {repositories, isLoaded} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="grid-table">
                <RepoTableHeader />
                    {repositories.map(repo => (
                        <RepoTableRow
                            key={repo.id}
                            repository={repo} />
                    ))}
                </div>
            )
        }
    }
}