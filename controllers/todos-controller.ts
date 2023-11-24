import { Request, Response } from "express";
import { createTodo, deleteTodo, getTodoById, getTodoList, updateTodo } from "../services/todos-service";

export const getTodosController = (request: Request, response: Response) => {
  return response.json(getTodoList());
};

export const getTodoController = (request: Request, response: Response) => {
  const { id } = request.params;
  return response.json(getTodoById(Number(id)));
};

export const createTodoController = (request: Request, response: Response) => {
  const { title } = request.body;
  return response.json(createTodo(title));
};

export const updateTodoController = (request: Request, response: Response) => {
  const { id } = request.params;
  const { title, checked } = request.body;
  return response.json(updateTodo(Number(id + ""), title, checked));
};
export const deleteTodoController = (request: Request, response: Response) => {
  const { id } = request.params;
  return response.json(deleteTodo(Number(id + "")));
};
