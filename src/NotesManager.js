import { editNotePopup } from "./editNotePopup";
import { displayHome } from "./displayHome";
import { Notes } from "./Notes";
import { toggleEditPopupOn } from "./toggleEditPopupOn";

export class NotesManager {
	static notesArray = [];

	static addNote() {
		let title = document.querySelector(".note-title").value;
		let info = document.querySelector(".note-info").value;

		const note = new Notes(title, info);

		NotesManager.notesArray.push(note);
		console.log(NotesManager.notesArray);

		window.localStorage.setItem("notesArray", JSON.stringify(NotesManager.notesArray));
	}

	static updateNotes() {
		const storage = JSON.parse(window.localStorage.getItem("notesArray"));

		if (storage === null) {
			NotesManager.notesArray = [];
		} else {
			NotesManager.notesArray = storage;
		}
	}
	static removeNote(note) {
		const index = NotesManager.notesArray.findIndex((item) => item.title === note.title);

		NotesManager.notesArray.splice(index, 1);
		window.localStorage.setItem("notesArray", JSON.stringify(NotesManager.notesArray));
		displayHome();
	}
	static editNote(note) {
		let index = NotesManager.notesArray.findIndex((item) => item.title === note.title);

		editNotePopup(index);
		toggleEditPopupOn();
	}
	static updateNotesArray(index) {
		const editTitle = document.getElementById("edit-title").value;
		const editInfo = document.getElementById("edit-info").value;
		let editedNote = NotesManager.notesArray[index];

		editedNote.title = editTitle;
		editedNote.info = editInfo;

		NotesManager.notesArray.splice(index, 1, editedNote);
		window.localStorage.setItem("notesArray", JSON.stringify(NotesManager.notesArray));
	}
}
