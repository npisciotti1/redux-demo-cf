import React from 'react';

import {classToggler} from '../../lib/util.js';

class Dropzone extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      dropReady: false
    }

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);

    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
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

  handleDragEnter(e) {
    e.preventDefault()
  }

  handleDragLeave(e) {
    e.preventDefault()
  }

  render() {
    let className = classToggler({
      'dropzone': true,
      'drop-ready': this.state.dropReady;
    })
    return (
      <div
        className={className}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnter={this.handleDragEnter}
        >
      {this.props.children}
      </div>
    )
  }
}

export default Dropzone;
