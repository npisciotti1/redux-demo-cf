import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('I\'m rendering:', this.props.category);
    this.props.onComplete(Object.assign({}, this.state));
  }
}
