import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/components/search_bar';
import {fetchOrgRepos} from '../../src/actions/github';
describe('Search Bar component', () => {
  let component;
  beforeEach( () => {
    component = renderComponent(SearchBar,{fetchOrgRepos});
  });

  it('should have 2 text input fields', () => {
    expect(component.find('input').length).equal(2);
  });

  it('text input should have a place holder', () =>{
    expect(component.find('input')).to.have.attr('placeholder');
  });

  it('should have a submit button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Enter some Search Term', () => {
    beforeEach( () => {
      component.find('input').simulate('change','new search term');
    });
    it('shows that text in the text input', () => {
      expect(component.find('input')).to.have.value('new search term');
    });
  });

  describe('Submit search form', () =>{
    beforeEach( () => {
      component.find('input').val('new search termx')
    });
    it('Clear the input', () => {
      component.find('form').simulate('submit');
      expect(component.find('input')).to.have.value('');
    });
  });
});
