import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addFilterElement,removeFilterElement,selectAll} from '../actions/github';
import _ from 'lodash';
class Filter extends Component{

  /* When checkbox is selected, based on value, invoke, selectAll,
    addFilterElement, removeFilterElement to update Filter languages in Redux store state*/
  handleSelect(event){
    const target = event.target;
    const value = target.value;
    if(value === 'All'){
      target.checked ? this.props.selectAll(this.props.languages) : this.props.selectAll([]);
    }
    else{
      this.refs.All.checked = false;
      target.checked ? this.props.addFilterElement(value) : this.props.removeFilterElement(value);
    }
  }

  renderLanguages(){
    const languages = this.props.languages;
    const filter = this.props.filter;
    return (
      languages.map((language) => {
        const isChecked = _.contains(filter,language); // Check whether language is selected
        return(
          <div key={`${this.props.owner}${language}`} className="checkbox">
            <label><input type="checkbox" value={language} name='language' onChange={this.handleSelect.bind(this)} checked={isChecked}/> {language}</label>
          </div>
        )
      })
    );
  }

 // Render Filter components
  render(){
    if(this.props.languages){
      return(
        <div className="panel panel-default filter">
          <div className="panel-heading">
            <h3 className="panel-title">Filter Repositories</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-12 text-primary language-filter">
              <h5><b>By language</b></h5>
              <div className="checkbox">
                <label><input type="checkbox" ref="All" key={this.props.owner}value='All' onClick={this.handleSelect.bind(this)} /> All</label>
              </div>
              {this.renderLanguages()}
            </div>
          </div>
        </div>
      )
    }
    else {
      return <div className="filter"></div>
    }

  }
}

// Processing Props passed to the Component: owner, languages and filter language
function mapStateToProps(state){
  if(state.repos.unload || state.repos.length == 0){
    return {};
  }
  else{
    const owner = state.repos[0].owner.id; // Owner id to create key in later use
    const languages = Array.from(new Set(state.repos.map( (repo) => repo.language))); // Create a SET of unique values
    const filter = state.filter; // Filter languages
    return {languages,owner,filter};
  }
}
export default connect(mapStateToProps,{addFilterElement,removeFilterElement,selectAll})(Filter);
