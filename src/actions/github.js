import * as constants from '../constants/constants';
import axios from 'axios';
import _ from 'lodash';
export function fetchOrgRepos(orgData){
  // Fetch Repositories based on input Info
  const orgName = orgData.org; // Organization Name
  const token = orgData.token.trim(); // Access Token
  //Create Request URL
  const access_token = (token==''?'':`?access_token=${token}`)
  const requestUrl= `${constants.ROOT_URL}/orgs/${orgName}/repos${access_token}`;

  //Create Request By AXIOS
  const request = axios.get(requestUrl);
  var repos = {};
  return (dispatch) => {
    request.then( (response) => {
      // Fetch successfully
      repos = response.data; // Fetched Repositories

      return Promise.all(repos.map( (repo) => {
          // Get Info of branches of each repository
          var branchRequestUrl = `${constants.ROOT_URL}/repos/${orgName}/${repo.name}/branches${access_token}`; //request URL
          return axios.get(branchRequestUrl); //axios request
        })
      )
    }). then( (branch) => {
          //Update Repository Info based on Fetched Branches Info
          var updatedRepos = repos.map( (repo,i) => {
              repo.branches = branch[i].data;
              if(repo.language == null)
                repo.language = 'Unknown'
              return repo;
          })
          //Dispatch actions to Reducers to get updated state of Redux Store
          dispatch({type: constants.FETCH_REPOS, payload: updatedRepos}); // Update Repositories List
          dispatch({type: constants.SELECT_ALL, payload:[]}); // Filter, default is selected all, no filter
        }
    ).catch( (error) => {
      // catch errors while fetching data: authorization error, not found, exceed limit..etc
      // update state to infor to users
        switch(error.response.status){
          case 401:
            dispatch({type: constants.ERROR_INVALID_TOKEN, payload: error});
            break;
          case 403:
            dispatch({type: constants.ERROR_EXCEED_LIMIT, payload: error});
            break;
          case 404:
            dispatch({type: constants.ERROR_NOT_FOUND, payload: error});
            break;
          default:
            dispatch({type: constants.ERROR_GENERAL, payload: error});
            break;
        }
    });
  };
}

// Update Filter List
// Add new language to filter
export function addFilterElement(data){
  return {
    type: constants.ADD_FILTER_ELEMENT,
    payload: data
  }
}

// Remove language to filter
export function removeFilterElement(data){
  return {
    type: constants.REMOVE_FILTER_ELEMENT,
    payload: data
  }
}

// Select All languages to filter
export function selectAll(data){
  return {
    type: constants.SELECT_ALL,
    payload: data
  }
}
