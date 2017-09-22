import React from 'react';
import {connect} from 'react-redux';

import CardForm from '../card-form';
import Draggable from '../draggable';

import {
  cardUpdate as cardActionUpdate,
  cardDelete as cardActionDelete
} from '../../action/card-actions';

class CardItem extends React.Component{
  render() {
    let {card, cardDelete, cardUpdate} = this.props;
    return(
      <li className='card-item'>
        <Draggable dataTransferItem={card}>
          <p> {card.content} </p>
          <button onClick={ () => cardDelete(card)}> Delete </button>
          <CardForm
            card={card}
            buttonText='update card'
            onComplete={cardUpdate}
           />
        </Draggable>
      </li>
    )
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => ({
  cardUpdate: (card) => dispatch(cardActionUpdate(card)),
  cardDelete: (card) => dispatch(cardActionDelete(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
