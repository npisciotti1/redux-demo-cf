import React from 'react';
import {connect} from 'react-redux';

import {categoryCreate, categoryUpdate, categoryDelete} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {

  render() {
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        <CategoryItem
          categoryUpdate={this.props.categoryUpdate}
          categoryDelete={this.props.categoryDelete}
        />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({categories: state})

const mapDispatchToProps = (dispatch, getState) => (
  {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
