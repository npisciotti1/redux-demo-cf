import 'React' from 'react';

class CategoryForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.category ? this.props.category.title : '';
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return(
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          name="title"
          placeholder="title"
          value={this.state.input}
          onChange={this.handleChange}
          />

        <button type="submit"> {this.props.buttonText} </button>
      </form>
    )
  }
}

export default CategoryForm;
