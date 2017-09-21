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

  test('it should be able to create categories', () => {

    let mockStore = createAppStore();
    let wrapper = shallow(<DashboardContainer store={mockStore}/>)

    //categories array should be empty before creating a category
    expect(wrapper.props().categories).toEqual([]);

    wrapper.props().categoryCreate({title: 'cool'});

    let wrapperState = wrapper.props().store.getState()
    expect(wrapperState.categories[0].title).toEqual('cool')
  })
})
