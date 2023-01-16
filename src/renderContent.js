import { renderTodoItem } from "./renderTodoItem";

export const renderContent = () => {
	const storage = JSON.parse(window.localStorage.getItem("todoArray"));
	storage.forEach((todo) => {
		renderTodoItem(todo);
	});
};
