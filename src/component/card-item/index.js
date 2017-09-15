import React from 'react';
import {connect} from 'react-redux';

import {
  cardUpdate as cardActionUpdate,
  cardDelete as cardActionDelete
} from '../../action/card-actions';

class CardItem extends React.Component{
  render() {
    let {card} = this.props;
    return(
      <li className='card-item'>
        <p> {card.content} </p>
        <button onClick={this.props.cardDelete}> Delete </button>
      </li>
    )
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => {
  cardUpdate: (card) => dispatch(cardActionUpdate(card)),
  cardDelete: (card) => dispatch(cardActionDelete(card))
}

export default CardItem;
