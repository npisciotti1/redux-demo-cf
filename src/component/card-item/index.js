import React from 'react';
import {connect} from 'react-redux';

import {cardUpdate, cardDelete} from '../action/card-actions';

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

export default CardItem;
