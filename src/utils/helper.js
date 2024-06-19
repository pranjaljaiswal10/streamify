export const formatter = Intl.NumberFormat("en-GB", {
  notation: "compact",
});

export function relativeTime(time) {
  let value;
  const todayDate = new Date();
  const givenDate = new Date(time);
  const diff = (todayDate - givenDate) / 1000;
  const min = Math.floor(diff / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);
  const week = Math.floor(day / 7);
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "always",
  });
  if (year > 0) {
    value = rtf.format(0 - year, "year");
  } else if (month > 0) {
    value = rtf.format(0 - month, "month");
  } else if (week > 0) {
    value = rtf.format(0 - week, "week");
  } else if (day > 0) {
    value = rtf.format(0 - day, "day");
  } else if (hour > 0) {
    value = rtf.format(0 - hour, "hour");
  } else if (min > 0) {
    value = rtf.format(0 - min, "minute");
  } else if (diff > 0) {
    value = rtf.format(0 - diff, "second");
  }
  return value;
}
