import React from 'react';


//props:
//  dataTransferItem -- will be stored as a JSON object on the 'drag' event.
//
class Draggable extends React.Component {
  constructor(props){
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e) {
    e.preventDefault();
    let jsonItem = JSON.stringify(this.props.dataTransferItem)
    e.dataTransfer.setData('application/json', jsonItem)
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

export default Draggable;
