import { NotesManager } from "./NotesManager";

export const renderNotesItem = (note) => {
	const content = document.getElementById("content");

	const notesObject = document.createElement("div");
	notesObject.id = "note-item";

	const topRow = document.createElement("div");
	topRow.className = "todo-head-row";

	const title = document.createElement("div");
	title.id = "note-title";
	title.textContent = note.title;

	const deleteBTN = document.createElement("button");
	deleteBTN.id = "todo-delete-btn";
	deleteBTN.textContent = "X";
	deleteBTN.addEventListener("click", () => {
		NotesManager.removeNote(note);
	});

	topRow.appendChild(title);
	topRow.appendChild(deleteBTN);

	const info = document.createElement("div");
	info.id = "note-info";
	info.textContent = note.info;

	const editBtn = document.createElement("button");
	editBtn.id = "note-edit";
	editBtn.classList = "edit-btn";
	editBtn.textContent = "Edit";

	notesObject.appendChild(topRow);
	notesObject.appendChild(info);
	notesObject.appendChild(editBtn);

	content.appendChild(notesObject);
};
