const monthsShort = [
  'jan',
  'feb',
  'mar',
  'mai',
  'jun',
  'jul',
  'aug',
  'sep',
  'okt',
  'nov',
  'des'
];

function isSameDate(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function prettyDateTime(date) {
  const d = new Date(date);
  const now = new Date();

  if (isSameDate(d, now)) {
    return `${d
      .getHours()
      .toString()
      .padStart(2, '0')}:${d
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  return `${d.getDate()}. ${monthsShort[d.getMonth()]}`;
}
