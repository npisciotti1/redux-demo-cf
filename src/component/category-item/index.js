import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import CardForm from '../card-form';
import CardItem from '../card-item';

import {cardCreate} from '../../action/card-actions';

import {
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete
} from '../../action/category-actions';


class CategoryItem extends React.Component{
  render(){
    let {category, categoryUpdate, categoryDelete, cards} = this.props;
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
        <main>
          <CardForm
            categoryID={category.id}
            buttonText='create card'
            onComplete={this.props.cardCreate}
            />
          <ul>
            {cards.map(card => <CardItem )}
          </ul>
        </main>
      </div>
    )

  }
}

//state here is the state of the store, not the component
let mapStateToProps = (state, props) => ({
  cards: state.cards[props.category.id]
})

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
  categoryDelete: (category) => dispatch(categoryActionDelete(category)),
  cardCreate: (card) =>  dispatch(cardCreate(card))
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
