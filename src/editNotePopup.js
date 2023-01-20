import { clearEditPopup } from "./clearEditPopup";
import { displayHome } from "./displayHome";
import { NotesManager } from "./NotesManager";

export const editNotePopup = (index) => {
	const body = document.querySelector("body");
	const popup = document.createElement("div");
	popup.id = "edit-popup";

	// heading
	const heading = document.createElement("div");
	heading.classList = "popup-heading";
	heading.textContent = "Edit todo...";

	// todo item info
	const note = NotesManager.notesArray[index];

	const popupTitle = document.createElement("textarea");
	popupTitle.id = "edit-title";
	popupTitle.value = note.title;
	console.log(popupTitle);

	const popupInfo = document.createElement("textarea");
	popupInfo.id = "edit-info";
	popupInfo.value = note.info;
	console.log(popupInfo);

	const confirmBtn = document.createElement("button");
	confirmBtn.textContent = "Confirm";
	confirmBtn.addEventListener("click", () => {
		NotesManager.updateNotesArray(index);
		clearEditPopup();
		displayHome();
	});

	popup.appendChild(heading);
	popup.appendChild(popupTitle);
	popup.appendChild(popupInfo);
	popup.appendChild(confirmBtn);

	body.appendChild(popup);
};
