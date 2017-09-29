import React from 'react';
import {mount} from 'enzyme';
import Draggable from './index.js';

describe('testing draggable component', () => {
  test('should store JSON on e.dataTransfer', () => {
    let item = {example: 'data'}
    let wrapper = mount(<Draggable dataTransferItem={item} />)

    wrapper.find('.draggable').simulate('dragstart')
  })
})
