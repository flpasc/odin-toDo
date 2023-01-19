import { clearContent } from "./clearContent";
import { NotesManager } from "./NotesManager";
import { renderNotesItem } from "./renderNotesItem";

export const displayNotes = () => {
	clearContent();

	NotesManager.notesArray.forEach((note) => {
		renderNotesItem(note);
	});
};
