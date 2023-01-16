import { Todo } from "./Todo";

// todo manager
// with storage + addTodo, remove... etc
// add all handling stuff inside Todomanager

// update todo function

export class TodoManager {
	static todoArray = [];

	static addTodo() {
		const title = document.querySelector(".new-title").value;
		const info = document.querySelector(".new-info").value;
		const dueDate = document.querySelector(".new-date").value;
		const prio = () => "notAssigned";

		let todo = new Todo(title, info, dueDate, prio());
		TodoManager.todoArray.push(todo);
		console.log(TodoManager.todoArray);
		window.localStorage.setItem("todoArray", JSON.stringify(TodoManager.todoArray));
	}

	static removeTodo() {}
	static updateTodo() {}
}
