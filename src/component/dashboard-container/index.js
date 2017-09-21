import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate as categoryActionCreate} from '../../action/category-actions';

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'


class DashboardContainer extends React.Component {
  componentWillMount() {
    this.props.categoryCreate({title: 'cool'});
    this.props.categoryCreate({title: 'whoah'})
    this.props.categoryCreate({title: 'sweet'})
    this.props.categoryCreate({title: 'as'})
  }
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
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
