import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = (username) =>
  axios
    .get(`${githubAPIBaseURL}/users/${username}/reps`)
    .then((response) => response.data);
