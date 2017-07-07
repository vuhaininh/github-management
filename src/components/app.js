import React, { Component } from 'react';
import SearchBar from './search_bar';
import RepoList from './repo_list';
import Filter from './filter';
export default class App extends Component {
  /* App component should have a search bar, filter bar and repository list.
     In case there is no repository, filter will be empty
     App will render SearchBar, RepoList and Filter components */
  render() {
    return (
      <div>
        <SearchBar />
        <div clasName="row">
          <div className="container">
            <div className="col-md-8">
              <RepoList />
            </div>
            <div className="col-md-4">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
