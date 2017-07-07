import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOrgRepos} from '../actions/github'
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      org: "",
      token: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const  name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      org: "",
      token: ""
    });
    this.props.fetchOrgRepos(this.state); // Dispatch function to get Repositories of Organization
  }
  render(){
    // Form to Input information: Organization and Access Token 
    return(
      <div className="search-bar">
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)} >
          <center>
            <input name="org" type="text" className="form-control" value={this.state.org}
              onChange={this.handleInputChange}
              placeholder="Organization name" />
            <input name="token" type="text" className="form-control" value={this.state.token}
              onChange={this.handleInputChange}
              placeholder="(Optional) Access token" />
            <button type="submit" className="btn btn-default">Search</button>
          </center>
        </form>
      </div>
    );
  }
}

export default connect(null,{fetchOrgRepos})(SearchBar);
