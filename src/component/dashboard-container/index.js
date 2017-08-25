import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../action/category-actions';

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'


class DashboardContainer extends React.Component {
  render(){
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
          />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
