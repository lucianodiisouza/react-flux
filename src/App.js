import React, { Component } from "react";
import "./App.css";

import TodoList from "./views/components/TodoList";
import NewTodoItem from "./views/components/NewTodoItem";
import { TodoService } from "./data/services/TodoService";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.clear = this.clear.bind(this);
  }

  async componentDidMount() {
    const todoList = await TodoService.list();
    this.setState({ todoList });
  }

  add(description) {
    TodoService.create({
      description,
      isChecked: false,
    }).then((newItem) => {
      const { todoList } = this.state;
      todoList.push(newItem);
      this.setState({ todoList });
    });
  }

  remove(id) {
    const { todoList } = this.state,
      itemIndex = todoList.findIndex((item) => item.id === id);
    todoList.splice(itemIndex, 1);
    TodoService.remove(id);
    this.setState({ todoList });
  }

  update(newItem) {
    const { todoList } = this.state,
      itemIndex = todoList.findIndex((item) => item.id === newItem.id);
    todoList[itemIndex] = newItem;
    TodoService.update(newItem);
    this.setState({ todoList });
  }

  clear() {
    const todo = [],
      done = [],
      { todoList } = this.state;

    todoList.forEach((item) => {
      if (item.isChecked) {
        done.push(item);
      } else {
        todo.push(item);
      }
    });
    done.forEach((item) => this.remove(item.id));
    this.setState({ todoList: todo})
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <NewTodoItem onAdd={this.add} />
        <hr />
        <button className="tw0btn" onClick={this.clear}>
          Limpar
        </button>
        <hr />
        <TodoList
          items={state.todoList}
          onRemove={this.remove}
          onUpdate={this.update}
        />
      </div>
    );
  }
}

export default App;
