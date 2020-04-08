import * as TodoConstants from "../actions/TodoActions";

const TodoReducer = (todoList = [], action) => {
  switch (action.type) {
    case TodoConstants.TODO_CREATE:
      return [
        ...todoList,
        {
          id: Date.now(),
          isChecked: false,
          description: action.description,
        },
      ];
    case TodoConstants.TODO_REMOVE:
      const itemIndex = todoList.findIndex((item) => item.id == action.id);
      return [
        ...todoList.slice(0, itemIndex),
        ...todoList.slice(itemIndex + 1),
      ];
    case TodoConstants.TODO_CLEAR:
      return todoList.filter((item) => !item.isChecked);
    case TodoConstants.TODO_UPDATE:
      return todoList.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
    default:
      return todoList;
  }
};

export default TodoReducer;
