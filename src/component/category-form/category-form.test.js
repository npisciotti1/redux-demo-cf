import React from 'react';
import {mount} from 'enzyme';
import CategoryForm from './index.js'

describe('testing CategoryForm', () => {
  test('onComplete() should be called with the state on submit', () => {
    //jest has a native 'mock function' that allows us to keep track of when
    //it's called, useful for our onComplete()
    let mockHandleOnComplete = jest.fn();

    //we create a 'wrapper' component with mount() from enzyme. By creating this
    //mock component, we can pass in our mock function from jest.
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

  test('testing onChange prop, should update the title on the state', () => {
    let wrapper = mount(
      <CategoryForm onComplete={() => {}} buttonText='submit' />
    )

    wrapper.find('input').simulate('change', {
      target: {
        value: 'updated'
      }
    });

    expect(wrapper.state('title')).toEqual('updated')
  })
})
