import React from 'react';
import mockedIssues from 'store/mockedData';
import IssuesList from 'components/IssuesList/IssuesList';

class IssuesContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    this.setState((state) => ({
      issues: mockedIssues
    }))
  }

  render () {
    return (
      <IssuesList issues={this.state.issues} />
    )
  }
}

export default IssuesContainer;
