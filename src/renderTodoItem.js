export const renderTodoItem = (todo) => {
	const content = document.getElementById("content");

	const todoObject = document.createElement("div");
	todoObject.id = "todo-item";

	const title = document.createElement("div");
	title.id = "todo-title";
	title.textContent = todo.title;

	const details = document.createElement("div");
	details.id = "todo-info";
	details.textContent = todo.info;

	const date = document.createElement("div");
	date.id = "todo-date";
	date.textContent = todo.date;

	const prio = document.createElement("div");
	prio.id = "todo-prio";
	prio.textContent = todo.prio;

	todoObject.appendChild(title);
	todoObject.appendChild(details);
	todoObject.appendChild(date);
	todoObject.appendChild(prio);

	content.appendChild(todoObject);
};
