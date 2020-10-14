import axios from 'axios';

// var axios = require('axios');

var githubInfo = {};

githubInfo.articles = 20;
githubInfo.contributors = 500;
githubInfo.commits = 700;
githubInfo.projects = 10;
githubInfo.tasks = 800;
githubInfo.languages = 6;

// var url = "https://api.github.com/users/videolan";

// let projects = async () => {
//     let github_profile = await axios.get(url);
//     githubInfo.projects = github_profile.data.public_repos;
// }

export default githubInfo;