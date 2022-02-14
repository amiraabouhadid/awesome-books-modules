import { DateTime } from "luxon";
export default function updateDate() {
  const dateContainer = document.querySelector("#date-container");
  dateContainer.innerHTML = "";
  const date = DateTime.now().toFormat("FF");
  console.log(date);

  dateContainer.append(date);
}
