import { TodoService } from "../services/TodoService";

export const TODO_LIST = "TODO_LIST";
export const TODO_LIST_RESPONSE = "TODO_LIST_RESPONSE";
export const TODO_CREATE = "TODO_CREATE";
export const TODO_CREATE_RESPONSE = "TODO_CREATE_RESPONSE";
export const TODO_UPDATE = "TODO_UPDATE";
export const TODO_REMOVE = "TODO_REMOVE";
export const TODO_CLEAR = "TODO_CLEAR";

export const list = () => {
  return {
    type: TODO_LIST,
  };
};

export const listResponse = (todoList) => {
  return {
    type: TODO_LIST_RESPONSE,
    todoList,
  };
};

export const create = (description) => {
  return {
    type: TODO_CREATE,
    description
  };
};

export const createResponse = (newItem) => {
  return {
    type: TODO_CREATE_RESPONSE,
    newItem
  };
};

export const remove = (id) => {
  return async (dispatch) => {
    await TodoService.remove(id);
    return dispatch({
      type: TODO_REMOVE,
      id,
    });
  };
};

export const update = (item) => {
  return async (dispatch) => {
    await TodoService.update(item);
    return dispatch({
      type: TODO_UPDATE,
      item,
    });
  };
};

export const clear = () => {
  return (dispatch, getState) => {
    const todoList = getState().TodoReducer;
    todoList.forEach((item) => {
      if (item.isChecked) {
        TodoService.remove(item.id);
      }
    });
    dispatch({
      type: TODO_CLEAR,
    });
  };
};
