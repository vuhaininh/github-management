import React, {Component} from 'react';
import {connect} from 'react-redux';
import RepoListItem from './repo_list_item';
import SelectedRepos  from '../selectors/selected_repos';

class RepoList extends Component{
  // Render Repository List
  renderRepos(){
    const repos = this.props.repos; // Get Repo list from props

    // Render each repository in RepoListItem component
    if(!repos.unload){
      return(
        repos.map( (repo) => {
          return(<RepoListItem key={repo.id} repo = {repo} />)
        })
      );
    }
    // If repositories are not loaded, show message
    else{
      return <div className="error text-danger">{repos.message}</div>
    }
  }
  render(){
    return(
      <div className="panel panel-default repo-list">
        <div className="panel-heading">
          <h3 className="panel-title">Organization Repositories</h3>
        </div>
        <div className="panel-body">
          {this.renderRepos()}
        </div>
      </div>
    );
  }
}
// Map state to Props to Component

function mapStateToProps(state){
  return {repos: SelectedRepos(state)};
}
export default connect(mapStateToProps)(RepoList); // Connect to Redux store
