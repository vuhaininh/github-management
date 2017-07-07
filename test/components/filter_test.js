import { renderComponent , expect } from '../test_helper';
import { owner,languages,filter,loadedRepos} from '../sample_data';
import Filter from '../../src/components/filter';

describe('Filter Component', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Filter,null, {repos:loadedRepos,filter:['HTML']});
  })

  it('should display enough options', () => {
    expect(component.find('input').length).equal(languages.length +1)
  });

  it('should display All option', () => {
    expect(component.find('input').first()).has.value('All')
  });

  it('When select ', () => {
    component.find('input').first().simulate('click','checked');
    expect(component.find('input')).to.be.checked
  });
});
