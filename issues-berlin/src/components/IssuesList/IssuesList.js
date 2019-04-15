import React from "react";
import PropTypes from "prop-types";
import Issue from "../Issue/Issue";
import "./IssuesList.css";

class IssuesList extends React.Component {
  render() {
    const { issues } = this.props;

    if (issues.length === 0) return `There are no biginner friendly issues`;

    const issuesList = issues.map((issue, index) => (
      <Issue
        key={index}
        title={issue.title}
        labels={issue.labels}
        repositoryTitle={issue.repository_title}
        repositoryLabels={issue.repository_labels}
        repositoryURL={issue.repository_url}
        issueLanguage={issue.language}
      />
    ));
    return (
      <React.Fragment>
        <h3 className="issueslist-title">Beginner Friendly Issues:</h3>
        <ul>{issuesList}</ul>
      </React.Fragment>
    );
  }
}

export default IssuesList;

IssuesList.propTypes = {
  issues: PropTypes.array.isRequired
};
