import { clearContent } from "./clearContent";
import { renderTodoItem } from "./renderTodoItem";
import { TodoManager } from "./TodoManager";

export const displayTodos = () => {
	clearContent();

	TodoManager.todoArray.forEach((todo) => {
		renderTodoItem(todo);
	});
};
