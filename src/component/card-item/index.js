import React from 'react';
import {connect} from 'react-redux';

import {cardUpdate, cardDelete} from '../../action/card-actions';

class CardItem extends React.Component{
  render() {
    let {card} = this.props;
    return(
      <li className='card-item'>
        <p> {card.content} </p>
      </li>
    )
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => {
  cardUpdate: (card) => dispatch(cardUpdate(card)),
  cardDelete: (card) => dispatch(cardDelete(card))
}

export default CardItem;
