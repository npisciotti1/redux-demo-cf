import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions';

import CategoryForm from '../category-form'


class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({title: 'yo it worked'})
  }
  render(){
    return(
      <main className="dashboard-container">
        <h2> dashboard </h2>
        <CategoryForm
          buttonText="create category"
          onComplete={this.props.categoryCreate}
          />
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
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
