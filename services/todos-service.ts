type Todo = {
  id: number;
  title: string;
  checked: boolean;
};

let NEXT_ID = 0;

const todos: Todo[] = [
  { id: ++NEXT_ID, title: "Make bed", checked: false },
  { id: ++NEXT_ID, title: "Make bed 1", checked: false },
  { id: ++NEXT_ID, title: "Make bed 2", checked: false },
];

export const getTodoList = () => {
  return todos;
};

export const getTodoById = (id: number) => {
  return todos.find((todo) => todo.id === id);
};

export const createTodo = (title: string) => {
  const newTodo: Todo = {
    id: ++NEXT_ID,
    title,
    checked: false,
  };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, title: string, checked: boolean) => {
  const todo = getTodoById(id);
  if (todo) {
    todo.title = title;
    todo.checked = checked;
    return todo;
  }
  return null;
};

export const deleteTodo = (id: number) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};
