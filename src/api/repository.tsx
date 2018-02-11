import { RepositoryEntity } from "../model/repository";
import { formatIntegerWithCommas } from '../lib/format_int';
import { formatToTitle } from "../lib/format_to_title";
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
    console.log(githubRepo.id, githubRepo.name, githubRepo.description);
    let title = formatToTitle(githubRepo.full_name);
    console.log(title)
    let stars = formatIntegerWithCommas(githubRepo.stargazers_count);

    let description = githubRepo.description.substr(0, 97);
    if (description.length === 97) {
        description = description.substr(0, Math.min(description.length, description.lastIndexOf(" "))) + "..."
    }

    return {
        id: githubRepo.id,
        name: title,
        description: description,
        url: githubRepo.html_url,
        stars: stars,
        size: githubRepo.size,
        language: githubRepo.language,
        created_at: githubRepo.created_at,
        updated_at: githubRepo.updated_at,
    };
};

export const repositoryAPI = {
    fetchAsync,
};