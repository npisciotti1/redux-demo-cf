import React from 'react';


//props:
//  dataTransferItem -- will be stored as a JSON object on the 'drag' event.
//
class Draggable extends React.Component {
  constructor(){
    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e) {
    e.preventDefault();
  }
  render(){
    return (
      <div
        className='draggable'
        draggable='true'
        onDragStart={this.handleDragStart}
        >
        {this.props.children}
      </div>
    )
  }
}
