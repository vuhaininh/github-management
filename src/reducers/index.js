import { combineReducers } from 'redux';
import gitRepos from './reducer_github';
import filterReducer from './reducer_filter_repos';
//Redux reducer to process state of application.
// Root reducer combines all element reducers
const rootReducer = combineReducers({
  repos: gitRepos, // Fetched Repositories
  filter: filterReducer // Filter 
});

export default rootReducer;
