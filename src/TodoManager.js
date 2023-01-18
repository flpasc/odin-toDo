import { PrioManager } from "./setPrio";
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
		const prio = PrioManager.lastClickedPrio;
		const project = document.getElementById("todo-dropdown").value;

		let todo = new Todo(title, info, dueDate, prio, project);
		TodoManager.todoArray.push(todo);
		console.log(TodoManager.todoArray);
		window.localStorage.setItem("todoArray", JSON.stringify(TodoManager.todoArray));
	}

	static updateArray() {
		const storage = JSON.parse(window.localStorage.getItem("todoArray"));

		if (storage === null) {
			TodoManager.todoArray = [];
		} else {
			TodoManager.todoArray = storage;
		}
	}

	static removeTodo() {}
	static updateTodo() {}
}
