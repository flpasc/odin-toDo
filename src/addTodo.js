import { Todo } from "./todo";
import { storage } from "../storage";

export const addTodo = () => {
	const title = document.querySelector(".new-title").value;
	const info = document.querySelector(".new-info").value;
	const dueDate = document.querySelector(".new-date").value;
	const prio = () => "notAssigned";

	let todo = new Todo(title, info, dueDate, prio());
	console.log(storage);
	storage.push(todo);
	console.log(storage);
	window.localStorage.setItem("todoArray", JSON.stringify(storage));
};

// wo speichern? in extra modul in einem array? nur local auf rechner?
// wie greife ich auf array von außerhalb des modules zu?
// kann mehrfach der gleiche name gespeichert werden? und dann via for loop itterieeren?
