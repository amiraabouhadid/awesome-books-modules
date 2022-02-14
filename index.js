import UserInterface from "./modules/UserInterface.mjs";
import updateDate from "./modules/DateTime.mjs";

UserInterface.populateContainer();

UserInterface.addButton.addEventListener("click", UserInterface.addBook);
window.setInterval(updateDate, 1000);
