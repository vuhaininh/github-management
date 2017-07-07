import {createSelector} from 'reselect';
import _ from 'lodash';
// Use Reselect to combine Product of Fetched Repositories and Filters
// Used for filter feature

const reposSelector = state => state.repos;  // all fetched Repository
const filterSelector = state => state.filter; // filter

// Function to process product of repos and filter
const getRepos = (repos,filter) => {
  if(filter.length == 0 || repos.unload)
    return repos; // return all repositories in case no filter
  else{
    //Filter based on languages
    
    const selectedRepos = _.filter(
      repos,
      repo => _.contains(filter,repo.language)
    );
    return  selectedRepos;
  }
}

export default createSelector(
  reposSelector, //pick off a piece of redux state
  filterSelector, //pick off a piece of redux state
  getRepos // last argument is the function that has filter logic
);
