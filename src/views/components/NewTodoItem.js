import React, { Component } from "react";

class NewTodoItem extends Component {
  static defaultProps = {
    onAdd: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  add(event) {
    event.preventDefault();
    const description = this.state.description;
    if (description) {
      this.setState({ description: "" });
      this.props.onAdd(description);
    }
  }

  handleChange(event) {
    const { target } = event,
     { name, value } = target;
     
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { state } = this;

    return (
      <form onSubmit={this.add}>
        <input
          type="text"
          placeholder="Novo Item"
          name="description"
          value={state.description}
          onChange={this.handleChange}
          className="tw-input"
        />
        <button className="tw-btn">Adicionar</button>
      </form>
    );
  }
}

export default NewTodoItem;
