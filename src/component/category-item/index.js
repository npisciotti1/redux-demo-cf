import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import CardForm from '../card-form';

import {cardCreate} from '../../action/card-actions';

import {
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete
} from '../../action/category-actions';


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
            category={category}
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
  categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
  categoryDelete: (category) => dispatch(categoryActionDelete(category)),
  cardCreate: (card) =>  dispatch(cardCreate(card))
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
