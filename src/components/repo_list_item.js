import React from 'react';

const RepoListItem = (props) => {
  const repo = props.repo;

  // Render Branches Names of Repository into LI
  function renderBranch(branches){
    return branches.map( (branch) => {
      return <li className="list-group-item list-group-item-warning repo-branch" key={branch.name}>{branch.name}</li>
    })
  }

  // Render Information about Repository: Name, Link, Branches, Private, Language
  // Use data-toggle data-target, and collapse class to implement expand feature
  return(
    <div className="group-item bg-info repo-item">
      <h4>Name: {repo.name}</h4>
      <a href={repo.html_url} target="_blank">Github Link</a>
      <span className="info-item btn btn-success" data-toggle="collapse" data-target={`#${repo.id}`}>Branches: <b>{repo.branches.length}</b></span>
      <span className="info-item">Programming language: <span  className="text-primary"><b>{repo.language}</b></span></span>
      <span className="info-item status"><span className={repo.private?"text-danger":"text-success"}><b>{repo.private?"private":"public"}</b></span></span>
      <div id={repo.id} className="collapse branch-list">
        <h4 className="text-primary">Branch Names</h4>
        <ul className="list-group">
          {renderBranch(repo.branches)}
        </ul>
      </div>
    </div>
  );
}
export default RepoListItem;
