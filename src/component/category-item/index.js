import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions';

import CategoryForm from '../category-form';


class CategoryItem extends React.Component{
  render(){
    let {category, categoryUpdate, categoryDelete} = this.props;
    return(
      <div className="category-item">
        <div className="content">
          <h3>{category.title}</h3>
          <button onClick={() => categoryDelete(category)}> delete </button>
        </div>
        <div className="editing">
          <CategoryForm
            category="category"
            buttonText="update"
            onComplete={categoryUpdate}
            />
        </div>
      </div>
    )

  }
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category))
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
