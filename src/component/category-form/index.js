import 'React' from 'react';

class CategoryForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.category ? category.title : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
  }

  render() {}
}
