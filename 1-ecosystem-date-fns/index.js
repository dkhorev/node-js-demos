const date = new Date();

console.log("Date UTC", date);

// add 3 days after the date in plain javascript
const threeDaysLater = new Date(date.getTime() + 259200000);

console.log("+3 days with plain JS", threeDaysLater);

// with 'date-fns' library
// import { addDays } from "date-fns";
//
// const anotherThreeDaysLater = addDays(date, 3);
// console.log("+3 days with date-fns", anotherThreeDaysLater);
