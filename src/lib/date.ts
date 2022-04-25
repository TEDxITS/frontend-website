import format from 'date-fns/format';
import id from 'date-fns/locale/id';
import parse from 'date-fns/parse';

//#region  //*=========== Constants ===========
export const DATE_FORMAT = {
  /** 15 Agustus 2021 */
  FULL: 'dd MMMM yyyy',
  /** 15 Agu 2021 */
  SHORTER_MONTH: 'dd MMM yyyy',
  /** 15 Agustus */
  NO_YEAR: 'dd MMMM',
};
//#endregion  //*======== Constants ===========

/**
 * Convert Date object to API format
 * @returns date with format 'yyyy-MM-dd'
 */
export function formatDateForAPI(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

/**
 * Convert Date object to API format
 * @returns date with format 'HH:mm:ss'
 */
export function formatTimeForAPI(date: Date): string {
  return format(date, 'HH:mm:ss');
}

/**
 * Convert yyyy-MM-dd from API to Date object
 */
export function parseDateFromAPI(date: string): Date {
  return parse(date, 'yyyy-MM-dd', new Date());
}

/**
 * Convert yyyy-MM-dd HH:mm:ss from API to Date object
 */
export function parseFullDateFromAPI(date: string): Date {
  return parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
}

/**
 * Convert Month in number to Month in string
 */
export function formatMonthToString(month: number): string {
  return format(new Date(0, month, 0), 'MMMM', { locale: id });
}

/**
 * Convert Date with with ID Locale with predefined formats
 */
export function formatLocale(
  date: Date,
  formatKey: keyof typeof DATE_FORMAT
): string {
  return format(date, DATE_FORMAT[formatKey]);
}

export function toDate(date: string) {
  return new Date(date);
}
