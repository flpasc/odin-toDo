import { displayHome } from "./displayHome";
import { editPopup } from "./editPopup";
import { PrioManager } from "./setPrio";
import { Todo } from "./Todo";
import { toggleEditPopupOn } from "./toggleEditPopupOn";

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

	static removeTodo(todo) {
		let index = TodoManager.todoArray.findIndex((item) => item.title === todo.title);

		TodoManager.todoArray.splice(index, 1);
		window.localStorage.setItem("todoArray", JSON.stringify(TodoManager.todoArray));
		displayHome();
	}

	static editTodo(todo) {
		let index = TodoManager.todoArray.findIndex((item) => item.title === todo.title);

		editPopup(index);
		toggleEditPopupOn();
	}
	static updateTodo(index) {
		const editTitle = document.getElementById("edit-title").value;
		const editInfo = document.getElementById("edit-info").value;
		let editedTodo = TodoManager.todoArray[index];
		console.log(editedTodo);

		editedTodo.title = editTitle;
		editedTodo.info = editInfo;

		TodoManager.todoArray.splice(index, 1, editedTodo);
		window.localStorage.setItem("todoArray", JSON.stringify(TodoManager.todoArray));
	}
}
