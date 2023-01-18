export const renderNotesItem = (note) => {
	const content = document.getElementById("content");

	const notesObject = document.createElement("div");
	notesObject.id = "note-item";

	const title = document.createElement("div");
	title.id = "note-title";
	title.textContent = note.title;

	const info = document.createElement("div");
	info.id = "note-info";
	info.textContent = note.info;

	const editBtn = document.createElement("button");
	editBtn.id = "note-edit";
	editBtn.classList = "edit-btn";

	notesObject.appendChild(title);
	notesObject.appendChild(info);
	notesObject.appendChild(editBtn);

	content.appendChild(notesObject);
};
