import React from 'react';
import {mount} from 'enzyme';
import CategoryForm from './index.js'

describe('testing CategoryForm', () => {
  test('onComplete() should be called with the state on submit', () => {
    let mockHandleOnComplete = jest.fn();

    let wrapper = mount(
      <CategoryForm
        onComplete={mockHandleOnComplete}
        buttonText='cool'
        />
      )

    let mockState = {title: 'test'};
    wrapper.setState(mockState);

    wrapper.find('form').simulate('submit');

    let {calls} = mockHandleOnComplete.mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(mockState);
  })
})
