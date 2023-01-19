import { toggleNewPopupOn } from "./toggleNewPopupOn";
import { displayHome } from "./displayHome";
import { displayTodos } from "./displayTodos";
import { displayNotes } from "./displayNotes";
import { ProjectManager } from "./ProjectManager";

export const navBar = () => {
	const navBar = document.getElementById("nav-bar");
	navBar.textContent = "";

	const list = document.createElement("ul");

	const item1 = document.createElement("li");
	item1.textContent = "Home";
	item1.id = "home-view";
	item1.classList = "nav-link";
	item1.addEventListener("click", displayHome);

	const item2 = document.createElement("li");
	item2.textContent = "To-Do";
	item2.id = "todo-view";
	item2.classList = "nav-link";
	item2.addEventListener("click", displayTodos);

	// add all projects to nav-bar
	const item3 = document.createElement("li");
	item3.textContent = "Projects";
	item3.id = "projects-view";
	item3.classList = "nav-link";

	ProjectManager.projectsArray.forEach((project) => {
		const projectElement = document.createElement("li");
		projectElement.classList = "project-link";
		projectElement.textContent = project.title;
		item3.appendChild(projectElement);
	});

	const item4 = document.createElement("li");
	item4.textContent = "Notes";
	item4.id = "notes-view";
	item4.classList = "nav-link";
	item4.addEventListener("click", displayNotes);

	const btnNewTodo = document.createElement("button");
	btnNewTodo.id = "btn-newTodo";
	btnNewTodo.textContent = "+";
	btnNewTodo.addEventListener("click", toggleNewPopupOn);

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item4);
	list.appendChild(item3);

	navBar.appendChild(list);
	navBar.appendChild(btnNewTodo);
};
