import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import CardForm from '../card-form';
import CardItem from '../card-item';
import Dropzone from '../dropzone';

import {cardCreate as cardActionCreate} from '../../action/card-actions';

import {
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete
} from '../../action/category-actions';


class CategoryItem extends React.Component{
  constructor(props){
    super(props)
    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this)

  }

  handleDropzoneComplete(err, data) {
    if(err) return console.error(err);

    console.log('drop', data)
  }
  
  render(){
    let {category, categoryUpdate, categoryDelete, cards, cardCreate} = this.props;
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
            onComplete={cardCreate}
            />
          <Dropzone onComplete={this.handleDropzoneComplete}>
            <ul>
              {cards.map(card => <CardItem key={card.id} card={card} /> )}
            </ul>
          </Dropzone>
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
  cardCreate: (card) =>  dispatch(cardActionCreate(card))
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
