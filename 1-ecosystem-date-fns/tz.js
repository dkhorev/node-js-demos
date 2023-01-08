import pkg from "date-fns-tz";
const { formatInTimeZone } = pkg;

const date = new Date("2022-10-25T10:00:00Z");

const usTime = formatInTimeZone(
  date,
  "America/New_York",
  "yyyy-MM-dd HH:mm:ss zzz"
);
const euTime = formatInTimeZone(
  date,
  "Europe/Paris",
  "yyyy-MM-dd HH:mm:ss zzz"
);

console.log("US", usTime);
console.log("EU", euTime);
