import React from "react";
import PropTypes from "prop-types";
const Issue = () => {
  return (
    <li>
      {/* Title: {title}
      Lables: {labels[0]} {labels[1]}
      Repository Title: {repositoryTitle}
      Repository Lables: {repositoryLabels[0]} {repositoryLabels[1]}
      Repository URL: {repositoryURL}
      Language: {issueLanguage} */}
    </li>
  );
};

export default Issue;

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  repositoryTitle: PropTypes.string.isRequired,
  repositoryLabels: PropTypes.array.isRequired,
  repositoryURL: PropTypes.string.isRequired,
  issueLanguage: PropTypes.string.isRequired
};
