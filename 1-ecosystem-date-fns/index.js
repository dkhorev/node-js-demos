const date = new Date();

console.log('Date', date.toISOString());

// add 3 days after the date in plain javascript
const newDate = new Date(date.getTime() + (3 * 24 * 60 * 60 * 1000));

console.log('+3 days with plain JS', newDate.toISOString());

// with date-fns
import { addDays } from 'date-fns'

const anotherDate = addDays(date, 3);
console.log('+3 days with date-fns', anotherDate.toISOString());