import React from 'react';

class CardForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.card ? {...props.card} : {title: '', categoryID: props.categoryID}
  }

  componentWillReceiveProps(props) {
    if(props.card) this.setState({...props.card})
  }

  handleChange(e){
    this.setState({title: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    
  }

  render(){

  }
}
