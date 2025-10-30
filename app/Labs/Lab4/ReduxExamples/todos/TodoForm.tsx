/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(){
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  
  return (
    <ListGroupItem className="d-flex align-items-center gap-2">
      <Button 
        variant="success"
        onClick={() => dispatch(addTodo())}
        id="wd-add-todo-click"
      >
        Add
      </Button>
      <Button 
        variant="warning"
        onClick={() => dispatch(updateTodo())}
        id="wd-update-todo-click"
      >
        Update
      </Button>
      <FormControl 
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        placeholder="Enter todo title"
      />
    </ListGroupItem>
  );
}