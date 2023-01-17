import { NotesManager } from "./NotesManager";
import { clearPopup } from "./clearPopup";
import { toggleNewPopupOff } from "./toggleNewPopupOff";
import { renderContent } from "./renderContent";

export const newNote = () => {
	const content = document.getElementById("popup-input");
	content.innerHTML = "";

	const title = document.createElement("textarea");
	title.classList = "note-title";
	title.placeholder = "Title: Gear for bikepacking";

	const info = document.createElement("textarea");
	info.classList = "note-info";
	info.placeholder = "Details: e.g buy a small toothbrush";

	const newNoteBtn = document.createElement("button");
	newNoteBtn.id = "add-note-btn";
	newNoteBtn.textContent = "CREATE NOTE";
	newNoteBtn.addEventListener("click", () => {
		NotesManager.addNote();
		clearPopup();
		toggleNewPopupOff();
		renderContent();
	});

	content.appendChild(title);
	content.appendChild(info);
	content.appendChild(newNoteBtn);
};
