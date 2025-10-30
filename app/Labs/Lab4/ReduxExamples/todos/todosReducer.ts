import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { id: "-1", title: "Learn Mongo" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state) => {
      const newTodos = [
        ...state.todos,
        { ...state.todo, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;
      state.todo = { id: "-1", title: "" };
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state) => {
      state.todos = state.todos.map((item) =>
        item.id === state.todo.id ? state.todo : item
      );
      state.todo = { id: "-1", title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;