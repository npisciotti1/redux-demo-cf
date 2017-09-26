import React from 'react';
import {connect} from 'react-redux';

import {renderIf} from '../../lib/util.js'
import CardForm from '../card-form';
import Draggable from '../draggable';

import {
  cardUpdate as cardActionUpdate,
  cardDelete as cardActionDelete
} from '../../action/card-actions';

class CardItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }

    this.handleCardUpdate = this.handleCardUpdate.bind(this);
  }

  handleCardUpdate(card) {
    this.props.cardUpdate(card);
    this.setState({editing: false})
  }

  render() {
    let {card, cardDelete, cardUpdate} = this.props;
    return(
      <li className='card-item'>
        <Draggable dataTransferItem={card}>

          {renderIf(!this.state.editing,
            <div onDoubleClick={() => this.setState({editing: true})}>
              <p> {card.content} </p>
              <button onClick={ () => cardDelete(card)}> Delete </button>
            </div>
          )}

          {renderIf(this.state.editing,
            <CardForm
              card={card}
              buttonText='update card'
              onComplete={handleCardUpdate}
             />
           )}
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
