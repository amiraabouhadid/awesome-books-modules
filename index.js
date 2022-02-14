import UserInterface from './modules/UserInterface';
import updateDate from './modules/DateTime';

UserInterface.populateContainer();

UserInterface.addButton.addEventListener('click', UserInterface.addBook);
window.setInterval(updateDate, 1000);
