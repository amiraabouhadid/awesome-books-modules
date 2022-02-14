import { DateTime } from 'luxon';
export default ()=>{
  const dateContainer = document.querySelector('#date-container');
  dateContainer.innerHTML  = '';
  const date = DateTime.now().toFormat('FF');
  dateContainer.append(date); 
}
