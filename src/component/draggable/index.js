import React from 'react';

class Draggable extends React.Component {
  render(){
    return (
      <div className='draggable' draggable='true'>
        {this.props.children}
      </div>
    )
  }
}
