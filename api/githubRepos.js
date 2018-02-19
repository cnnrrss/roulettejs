'use strict';

const { getRepositories } = require('./helpers/getRepositories');

module.exports.helloworld = (event, context, callback) => {
  getRepositories()
  .then((json) => {

    return callback(null, { 
      statusCode: json.status, 
      body: JSON.stringify({
        message: 'Github data fetched successful',
        data: json,
      })
    });
  });
};

const responseToRepositoryEntities = (githubResponse) => {
  let ran = Math.floor(Math.random() * 40) + 1;
  return githubResponse.items.slice(ran, ran + 10).map(mapResponseToRepositories)
};

const mapResponseToRepositories = (githubRepo) => {
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

function formatToTitle(text = '') {
  let title = text.toLowerCase().split('/')
  title = title[1] === 'framework' ? title[0] : title[1];

  return toTitleCase(title.replace(/-|_/g, ' '));
}

function formatIntegerWithCommas(v = 0) {
  const s = parseInt(v, 10).toString();
  let result = '';

  for (let idx = s.length - 1; idx >= 0; idx--) {
    if ((s.length - idx - 1) % 3 === 0 && idx !== s.length - 1) {
      result = `,${result}`;
    }
    result = s[idx] + result;
  }

  return result;
}

function formatToDescription(s = '') {
  let desc = s.substr(0, 97);
  if (desc.length === 97) {
    desc = s.substr(0, Math.min(s.length, desc.lastIndexOf(" "))) + "..."
  }
  return desc;
}

function toTitleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
