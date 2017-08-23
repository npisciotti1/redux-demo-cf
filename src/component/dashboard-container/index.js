import React from 'react';
import {connect} from 'react-redux';
import {categoryActionCreate} from '../../action/category-actions';

import CategoryForm from '../category-form'


class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryActionCreate({title: 'yo it worked'})
  }
  render(){
    return(
      <main className="dashboard-container">
        <h2> dashboard </h2>
        <CategoryForm
          buttonText="create category"
          onComplete={this.props.categoryActionCreate}
          />
        {this.props.categories.map( item =>
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
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
