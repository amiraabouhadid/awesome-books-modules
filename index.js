import UserInterface from './modules/UserInterface.js';
import updateDate from './modules/DisplayDateTime.js';

UserInterface.populateContainer();
UserInterface.addButton.addEventListener('click', UserInterface.addBook);
window.setInterval(updateDate, 1000);
