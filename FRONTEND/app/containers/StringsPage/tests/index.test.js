/**
 * Tests for StringPage index.js
 */
import expect from 'expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from './shallowWithStore';

import { StringsPage } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('StringsPage', () => {
  it('should render successfully if string is not provided by store', () => {
    const testState = {
      stringsPage: {
        strings: [],
        loading: true,
        error: false,
      },
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<StringsPage />, store);
    expect(typeof component).toEqual('object');
  });
});
