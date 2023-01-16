import { clearPopup } from "./clearPopup";
import { renderContent } from "./renderContent";
import { TodoManager } from "./TodoManager";
import { toggleNewPopupOff } from "./toggleNewPopupOff";

export const newTodo = () => {
	const content = document.getElementById("popup-input");
	content.innerHTML = "";

	const title = document.createElement("textarea");
	title.classList = "new-title";
	title.placeholder = "Title: Empty trash";

	const info = document.createElement("textarea");
	info.classList = "new-info";
	info.placeholder = "Details: e.g bathroom, kitchen, desk";

	const date = document.createElement("input");
	date.classList = "new-date";
	date.type = "date";

	// prioritie buttons
	const priorities = document.createElement("div");
	priorities.id = "priorities";

	const lowPrio = document.createElement("button");
	lowPrio.textContent = "LOW";
	lowPrio.id = "low-prioritie";

	const mediumPrio = document.createElement("button");
	mediumPrio.textContent = "MEDIUM";
	mediumPrio.id = "med-prioritie";

	const highPrio = document.createElement("button");
	highPrio.textContent = "HIGH";
	highPrio.id = "high-prioritie";

	priorities.appendChild(lowPrio);
	priorities.appendChild(mediumPrio);
	priorities.appendChild(highPrio);

	// create add button and the div
	const addButtonArea = document.createElement("div");
	addButtonArea.id = "add-btn-area";
	const addBtn = document.createElement("button");
	addBtn.id = "btn-add";
	addBtn.textContent = "ADD";
	addBtn.addEventListener("click", () => {
		TodoManager.addTodo();
		renderContent();
		clearPopup();
		toggleNewPopupOff();
	});

	addButtonArea.appendChild(addBtn);
	content.appendChild(title);
	content.appendChild(info);
	content.appendChild(date);
	content.appendChild(priorities);
	content.appendChild(addButtonArea);
};
