import * as constants from '../constants/constants';
export default function(state =  {unload: true, message:constants.ERROR_INPUT_MESSAGE }, action){
  switch(action.type){
   case constants.FETCH_REPOS:
      if(action.payload.length == 0)
        return {unload:true, message:constants.NO_REPO_MESSAGE}; // If organization does not have Repo
      else
        return action.payload; // Return Repository list
   // Catch different error types with Message
   case constants.ERROR_GENERAL:
    return {unload:true, message:constants.ERROR_GENERAL_MESSAGE};
   case constants.ERROR_INVALID_TOKEN:
    return {unload:true, message:constants.ERROR_INVALID_TOKEN_MESSAGE};
   case constants.ERROR_EXCEED_LIMIT:
     return {unload:true, message:constants.ERROR_403_MESSAGE};
   case constants.ERROR_NOT_FOUND:
     return {unload:true, message:constants.ERROR_404_MESSAGE};
    default:
      return state;
  }
  return state;
}
