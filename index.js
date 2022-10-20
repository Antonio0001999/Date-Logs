// This file contains most of the methods for Dates and some useful explanations about them, you can run this file with node and look at the results.

//#region Constants

const YEAR = 1999,
	MONTH = 7,
	DAY = 22,
	HOUR = 23,
	MINUTE = 59,
	SECOND = 59,
	MILLISECOND = 999;

//#endregion

//#region Constructors

// Single Argument constructors.
let noArgsDate = new Date(); // By default returns current date.
let copyDate = new Date(noArgsDate); // Creates a copy from another Date Object.
let localeStringDate = new Date("July 22, 1999 23:59:59"); // It is not recommended to use this constructor.
let jsonStringDate = new Date("1999-07-22T23:59:59"); // Must be filled with 0 when numbers are less than 10 (e.g. 0001-01-01T01:01:01).

// Multiple Arguments constructors.

// <!> If some of the params underflows or overflows (for example using a number not between 1 to 31) it will use the highest value possible for that value.
// <!> Years 0 to 99 will be mapped to years 1990 to 1999.

let dateYear = new Date(MILLISECOND); // Will return the day based on the number of milliseconds.
let dateYearMonth = new Date(YEAR, MONTH); // Will return the first day of the month at 00:00:00.000, and so on depending on the specified args.
let dateYearMonthDay = new Date(YEAR, MONTH, DAY);
let dateYearMonthDayHour = new Date(YEAR, MONTH, DAY, HOUR);
let dateYearMonthDayHourMinute = new Date(YEAR, MONTH, DAY, HOUR, MINUTE);
let dateYearMonthDayHourMinuteSecond = new Date(
	YEAR,
	MONTH,
	DAY,
	HOUR,
	MINUTE,
	SECOND
);
let dateYearMonthDayHourMinuteSecondMillisecond = new Date(
	YEAR,
	MONTH,
	DAY,
	HOUR,
	MINUTE,
	SECOND,
	MILLISECOND
);

//#endregion

//#region METHODS

let dateNow = Date.now(); // Returns the number of milliseconds since 1st January 1970.
let dateUTC = Date.UTC(YEAR, MONTH); // Returns the number of milliseconds from 1st January 1970 to the specified date with params (At least 2 are needed).

// <!> As you can tell, to get an Object Date with today's exact date both in UTC and regular format you can use this methods (those are trivial and not included on logs):
let today = new Date(Date.now());
let todayUTC = new Date(Date.UTC());

// GETTERS (There's also UTC variants if you are looking for UTC dates).
let getMilliseconds = noArgsDate.getMilliseconds();
let getSeconds = noArgsDate.getSeconds();
let getMinutes = noArgsDate.getMinutes();
let getHours = noArgsDate.getHours();
let getDayOfWeek = noArgsDate.getDay(); // ATTENTION: The days starts on 0.
let getDayOfMonth = noArgsDate.getDate();
let getMonth = noArgsDate.getMonth(); // ATTENTION: The months starts on 0.
let getYear = noArgsDate.getFullYear();

// STRINGS (There's also UTC and Locale variants if you are looking for UTC or Locale dates).
let dateToString = noArgsDate.toString(); // Returns the locale String for that date.
let toDateString = noArgsDate.toDateString(); // Returns short date (e.g. Thu Jul 22 1999).
let toLocaleString = noArgsDate.toISOString(); // Returns ISO format.
let toJSON = noArgsDate.toJSON(); // ISO format again, I didn't find a real difference.
let toTimeString = noArgsDate.toTimeString(); // Returns the time based on GMT.

// <!> You can use country Locale Date format with toLocaleString and the ISO 2-digit Country Code (https://www.iban.com/country-codes).
let toStringEnglish = noArgsDate.toLocaleString("en");
let toStringSpanish = noArgsDate.toLocaleString("es");
let toStringGerman = noArgsDate.toLocaleString("de");

//#endregion

//#region Logs
console.log("---------------------------------------------------------------------------");
console.log("CONSTRUCTORS", {
	NoArgsDate: noArgsDate,
	CopyDate: copyDate,
	LocalStringDate: localeStringDate,
	JSONStringDate: jsonStringDate,
	DateYear: dateYear,
	DateYearMonth: dateYearMonth,
	DateYearMonthDay: dateYearMonthDay,
	DateYearMonthDayHour: dateYearMonthDayHour,
	DateYearMonthDayHourMinute: dateYearMonthDayHourMinute,
	DateYearMonthDayHourMinuteSecond: dateYearMonthDayHourMinuteSecond,
	DateYearMonthDayHourMinuteSecondMillisecond:
		dateYearMonthDayHourMinuteSecondMillisecond,
});
console.log("---------------------------------------------------------------------------");
console.log("GETTERS", {
	GetMilliseconds: getMilliseconds,
	GetSeconds: getSeconds,
	GetMinutes: getMinutes,
	GetHours: getHours,
	GetDayOfWeek: getDayOfWeek,
	GetDayOfMonth: getDayOfMonth,
	GetMonth: getMonth,
	GetYear: getYear,
});
console.log("---------------------------------------------------------------------------");
console.log("STRINGS", {
	ToString: dateToString,
	ToDateString: toDateString,
	ToLocaleString: toLocaleString,
	ToJSON: toJSON,
	ToTimeString: toTimeString,
	ToStringEnglish: toStringEnglish,
	ToStringSpanish: toStringSpanish,
	ToStringGerman: toStringGerman
})
//#endregion