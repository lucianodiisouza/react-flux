import React, { Component } from "react";

class TodoItem extends Component {
  static defaultProps = {
    item: {},
    onRemove: () => {},
    onUpdate: () => {},
  };

  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);

    this.input = React.createRef();
  }

  remove() {
    this.props.onRemove(this.props.item.id);
  }

  update() {
    const { item } = this.props;
    item.description = this.input.current.value;
    this.props.onUpdate(item);
  }

  render() {
    const { props } = this,
      item = props.item;

    return (
      <li className="todo-list-item">
        <input className="tw-check" type="checkbox" checked={item.isChecked} />
        <input
          type="text"
          className="tw-input"
          disabled={item.isChecked}
          defaultValue={item.description}
          ref={this.input}
          onBlur={this.update}
        />
        <button className="tw-btn" onClick={this.remove}>
          X
        </button>
      </li>
    );
  }
}

export default TodoItem;
