import { RepositoryEntity } from "../model/repository";
import { formatIntegerWithCommas } from '../lib/format_int';
import { formatToTitle } from "../lib/format_to_title";
import { formatToDescription } from '../lib/format_to_description';

//?l=JavaScript&o=desc&q=framework+NOT+"hello+world"+NOT+"awesome"&s=stars&type=Repositories
// curl https://api.github.com/search/repositories?q=framework+NOT+"hello+world"+NOT+"awesome"+language:javascript&sort=stars&order=desc
// https://api.github.com/search/repositories\?q\=framework+NOT+"hello+world"+NOT+"awesome"+NOT+"todo"+language:javascript\&sort\=stars\&order\=desc\&per_page\=100
const baseUrl = 'https://api.github.com/search/repositories';
let dryRun = true;

const fetchAsync = (query: string, sort: string): Promise<RepositoryEntity[]> => {
    let apiUrl = '';
    let fetchConfig = {};

    // TODO: cleanup the dryRun stuff
    if (dryRun === true) {
        apiUrl = 'http://localhost:3000/mock.json'
    } else {
        apiUrl = `${baseUrl}?q=${query}&${sort}&per_page=50`;
        fetchConfig = ({ method: 'GET' });
    }
    
    const response = fetch(apiUrl, fetchConfig)
        .then((res) => (res.json()))
        .then(responseToRepositoryEntities)

    return response
};

const responseToRepositoryEntities = (githubResponse: any): RepositoryEntity[] => {
    // TODO: refactor .slice() call for pagination
    let ran = Math.floor(Math.random() * 40) + 1 ;
    return githubResponse.items.slice(ran, ran+10).map(mapResponseToRepositories)
};

const mapResponseToRepositories = (githubRepo): RepositoryEntity => {
    let title = formatToTitle(githubRepo.full_name);
    let stars = formatIntegerWithCommas(githubRepo.stargazers_count);
    let description = formatToDescription(githubRepo.description);
    let { id, html_url, size, language, created_at, updated_at } = githubRepo;
    
    return {
        id: id,
        name: title,
        description: description,
        url: html_url,
        stars: stars,
        size: size,
        language: language,
        created_at: created_at,
        updated_at: updated_at,
    };
};

export const repositoryAPI = {
    fetchAsync,
};