import { Button, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  
  return (
    <ListGroupItem className="d-flex align-items-center gap-2">
      <Button 
        variant="danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        size="sm"
      >
        Delete
      </Button>
      <Button 
        variant="primary"
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        size="sm"
      >
        Edit
      </Button>
      <span>{todo.title}</span>
    </ListGroupItem>
  );
}