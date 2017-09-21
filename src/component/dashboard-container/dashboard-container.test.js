import React from 'react';
import {shallow} from 'enzyme';

import createAppStore from '../../lib/store.js';
import DashboardContainer from './index.js';

describe('DashboardContainer test suite', () => {
  test('it should have a category props from the store', () => {

    let mockStore = createAppStore();
    let wrapper = shallow(<DashboardContainer store={mockStore}/>)

    expect(wrapper.props().categories).toEqual([])
  })
})
