//action-creators are helper functions to create actions.

//you should only use action-creators in your app.
//you should NEVER hard-code action-literals in your app.

import uuid from 'uuid';

export const categoryCreate = (category) => {
  category.id = uuid()
  category.timestamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryReset = () => ({type: 'CATEGORY_RESET'})
