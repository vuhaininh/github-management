import * as constants from '../constants/constants';
import axios from 'axios';
import _ from 'lodash';
export function fetchOrgRepos(orgData){
  const orgName = orgData.org; 
  const token = orgData.token.trim();
  const access_token = (token==''?'':`?access_token=${token}`)
  const requestUrl= `${constants.ROOT_URL}/orgs/${orgName}/repos${access_token}`;

  const request = axios.get(requestUrl);
  let repos = {};
  return (dispatch) => {
    request
    .then( (response) => {
      repos = response.data; 

      return Promise.all(repos.map( (repo) => {
          const branchRequestUrl = `${constants.ROOT_URL}/repos/${orgName}/${repo.name}/branches${access_token}`; 
          return axios.get(branchRequestUrl);
        })
      );
    })
    . then( (branch) => {
          var updatedRepos = repos.map( (repo,i) => {
              repo.branches = branch[i].data;
              if(repo.language == null)
                repo.language = 'Unknown'
              return repo;
          })
          dispatch({type: constants.FETCH_REPOS, payload: updatedRepos}); 
          dispatch({type: constants.SELECT_ALL, payload:[]}); 
        }
    )
    .catch( (error) => {
      // catch errors while fetching data: authorization error, not found, exceed limit..etc

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


export function addFilterElement(data){
  return {
    type: constants.ADD_FILTER_ELEMENT,
    payload: data
  }
}

export function removeFilterElement(data){
  return {
    type: constants.REMOVE_FILTER_ELEMENT,
    payload: data
  }
}


export function selectAll(data){
  return {
    type: constants.SELECT_ALL,
    payload: data
  }
}
