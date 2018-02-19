const fetch = require('node-fetch');

const baseUrl = 'https://api.github.com/search/repositories';
const query = 'framework+NOT+"hello+world"+NOT+"awesome"+NOT+"todo"+language:javascript';
const apiUrl = `${baseUrl}?q=${query}&sort=stars&order=desc&per_page=50`;

const options = {
  headers: {
    Accept: 'application/json',
  },
};

const getRepositories = () => new Promise((resolve, reject) => {
    fetch(apiUrl, options)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
});

module.exports = {
    getRepositories,
};