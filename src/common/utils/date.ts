export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};

export const DATE_AND_MONTH_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
};

export function formatDate(date: string): string {
  const dateObject: Date = new Date(date);

  if (isNaN(dateObject.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-GB', DATE_FORMAT_OPTIONS).format(
    dateObject,
  );
}

export function formatDateThenGetDateAndMonth(date: string) {
  const dateObject: Date = new Date(date);

  if (isNaN(dateObject.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-GB', DATE_AND_MONTH_FORMAT_OPTIONS).format(
    dateObject,
  );
}
