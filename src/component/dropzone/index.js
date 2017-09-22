import React from 'react';

class Dropzone extends React.Component {
  constructor(props){
    super(props)

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragOver(e){
    e.preventDefault()
  }

  handleDrop(e) {
    e.preventDefault()
    try {
      let item = JSON.parse(e.dataTransfer.getData('application/json'))
      this.props.onComplete(null, item);
    } catch(err) {
      this.props.onComplete(err);
    }
  }

  render() {
    return (
      <div
        className='drop-zone'
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        >
      {this.props.children}
      </div>
    )
  }
}

export default Dropzone;
