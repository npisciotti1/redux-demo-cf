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

  render() {
    (
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
