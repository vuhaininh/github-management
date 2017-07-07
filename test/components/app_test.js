import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import RepoList from '../../src/components/repo_list';
import Filter from '../../src/components/filter';
import SearchBar from '../../src/components/search_bar';
describe('App Component' , () => {
  let app, searchBar, repoList, filter;

  beforeEach(() => {
    app = renderComponent(App);
    searchBar = renderComponent(SearchBar);
    repoList = renderComponent(RepoList);
    filter = renderComponent(Filter)
  });

  it('App can be rendered', () => {
    expect(app).to.exist;
  });

  describe('App renders child components', () => {
    beforeEach(() => {

    });
    it('Search Bar can be rendered', () => {
      expect(searchBar).to.exist;
    });
    it('RepoList can be rendered', () => {
      expect(repoList).to.exist;
    });
    it('Filter can be rendered', () => {
      expect(filter).to.exist;
    });
  });

  it('should contain a search bar', () => {
    expect(app.find('.search-bar')).to.exist;
  });

  it('should contain a repository list', () => {
    expect(app.find('.repo-list')).to.exist;
  });
  it('should contain a filter', () => {
    expect(app.find('.filter')).to.exist;
  });
});
