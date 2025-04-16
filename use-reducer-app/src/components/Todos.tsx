//   const [state, dispatch] = useReducer(reducer, initialState);

import { useReducer } from "react";

const initialState = [
  // {id:1,name:'Reading'}
];

//! Todo Action
enum TodosAction {
  ADD_TASK,
  DELETE_TASK,
}

function reducer(state, action) {
  switch (action.type) {
    case TodosAction.ADD_TASK:
      return [...state, { id: state.length + 1, name: action.payload }];

    case TodosAction.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}

function init(initialState) {
  const data = [...initialState, { id: 1, name: "Reading" }];
  return data;
}

export const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);

  //! Add Task
  const handleChange = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: TodosAction.ADD_TASK,
        payload: e.target.value,
      });
    }
  };

  //! Delete Task
  const deleteTask = (id: string) => {
    dispatch({
      type: TodosAction.DELETE_TASK,
      payload: id,
    });
  };

  return (
    <>
      <h3>Task List {todos.length}</h3>
      <label htmlFor="task">Emter Task</label>
      <input type="text" id="task" onKeyDown={(e) => handleChange(e)} />

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => deleteTask(todo.id)}>Delete Task</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add your task</p>
      )}
    </>
  );
};
