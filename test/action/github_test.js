import {expect} from '../test_helper';
import {ADD_FILTER_ELEMENT} from '../../src/constants/constants';
import {addFilterElement} from '../../src/actions/github';
describe('Filter action function', () => {
  it('has the correct type', () => {
    const action = addFilterElement('HTML');
    expect(action.type).to.equal(ADD_FILTER_ELEMENT);
  });

  it('has the correct payload', () => {
    const action = addFilterElement('HTML');
    expect(action.payload).to.equal('HTML');
  });
});
