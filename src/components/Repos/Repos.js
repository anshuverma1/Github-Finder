import React from "react";
import PropTypes from "prop-types";
import RepoItems from "./RepoItems";
const Repos = ({ repos }) => {
  return repos.map((repo) => {
    return <RepoItems repo={repo} key={repo.id} />;
  });
};

Repos.prototype = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
