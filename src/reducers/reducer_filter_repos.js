import {ADD_FILTER_ELEMENT,REMOVE_FILTER_ELEMENT,SELECT_ALL} from '../constants/constants';
export default function(state = [], action){
  // Return different filter based on different action type
  switch(action.type){
    case SELECT_ALL:
      return action.payload; // Filter is passed action payload (All languages)
    case ADD_FILTER_ELEMENT:
      return [...state,action.payload]; // Add new language to current filter
    case REMOVE_FILTER_ELEMENT:
      return state.filter( language => language !== action.payload); // Remove language from current filter
    default:
      return state; // Default no filter
  }
  return state;
}
