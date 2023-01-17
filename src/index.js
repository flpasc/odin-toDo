import "./styles/style.css";
import { layout } from "./layout";
import { footer } from "./footer";
import { navBar } from "./navBar";
import { header } from "./header";
import { newPopup } from "./newPopup";
import { renderContent } from "./renderContent";
import { TodoManager } from "./TodoManager";
import { NotesManager } from "./NotesManager";

layout();
footer();
navBar();
header();
newPopup();
TodoManager.updateArray();
NotesManager.updateNotes();
renderContent();
