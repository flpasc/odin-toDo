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

	notesObject.appendChild(title);
	notesObject.appendChild(info);

	content.appendChild(notesObject);
};
