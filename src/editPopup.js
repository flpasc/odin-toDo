import { clearEditPopup } from "./clearEditPopup";
import { displayHome } from "./displayHome";
import { TodoManager } from "./TodoManager";

export const editPopup = (index) => {
	const body = document.querySelector("body");
	const popup = document.createElement("div");
	popup.id = "edit-popup";

	// heading
	const heading = document.createElement("div");
	heading.classList = "popup-heading";
	heading.textContent = "Edit todo...";

	// todo item info
	const todo = TodoManager.todoArray[index];

	const popupTitle = document.createElement("textarea");
	popupTitle.id = "edit-title";
	popupTitle.value = todo.title;
	console.log(popupTitle);

	const popupInfo = document.createElement("textarea");
	popupInfo.id = "edit-info";
	popupInfo.value = todo.info;
	console.log(popupInfo);

	const confirmBtn = document.createElement("button");
	confirmBtn.textContent = "Confirm";
	confirmBtn.addEventListener("click", () => {
		TodoManager.updateTodo(index);
		clearEditPopup();
		displayHome();
	});

	popup.appendChild(heading);
	popup.appendChild(popupTitle);
	popup.appendChild(popupInfo);
	popup.appendChild(confirmBtn);

	body.appendChild(popup);
};
