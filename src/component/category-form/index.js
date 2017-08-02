import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props)

    this.state = props.category ? {...props.category} : {title:;}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.category)
    this.setState(props.category)
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('I\'m rendering:', this.props.category);
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          className='title-input'
          name='name'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          className='price-input'
          name='budget'
          type='number'
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button
          className='button-input'
          type='submit'>
          {this.props.buttonName}
        </button>
      </form>
    )
  }
}

export defaut CategoryForm;
