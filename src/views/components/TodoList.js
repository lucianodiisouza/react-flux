import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  static defaultProps = {
    items: [],
    onRemove: () => {},
    onUpdate: () => {}
  };
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  remove(id) {
    this.props.onRemove(id);
  }

  update(item){
    this.props.onUpdate(item)
  }

  render() {
    const { props } = this;
    if (props.items.length === 0) {
      return <div>No Items</div>;
    }
    return (
      <ul className="todo-list">
        {props.items.map((item) => (
          <TodoItem 
          onUpdate={this.update}
          onRemove={this.remove}
          key="item.id" 
          item={item} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
