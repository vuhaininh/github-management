import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';
import thunk from 'redux-thunk';
// Setup testing environment to run like a browser in the command line

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);


// Build renderComponent helper that should render a given React Class

function renderComponent(ComponentClass, props = {}, state = {}) {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStoreWithMiddleware(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

//Build helper for Simulating Event

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// Setup  chai-query
chaiJquery(chai, chai.util, $);

export {renderComponent, expect};
