import { storage } from "../storage";

export class Todo {
	constructor(title, info, date, prio) {
		this.title = title;
		this.info = info;
		this.date = date;
		this.prio = prio;
	}
	// update todo function
}

// todo manager
// with storage + addTodo, remove... etc
// add all handling stuff inside Todomanager

export class TodoManager {
	static todoArray = [];
	static addTodo() {
		const title = document.querySelector(".new-title").value;
		const info = document.querySelector(".new-info").value;
		const dueDate = document.querySelector(".new-date").value;
		const prio = () => "notAssigned";

		let todo = new Todo(title, info, dueDate, prio());
		console.log(TodoManager.todoArray);
		TodoManager.todoArray.push(todo);
		console.log(TodoManager.todoArray);
		window.localStorage.setItem("todoArray", JSON.stringify(TodoManager.todoArray));
	}
}
