import React from 'react';

class CardForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.card ? {...props.card} : {title: '', categoryID: props.categoryID}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.card) this.setState({...props.card})
  }

  handleChange(e){
    this.setState({title: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render(){
    return (
      <form className="card-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          />
        <button type="submit"> "Add Card" </button>
      </form>
    )
  }
}
