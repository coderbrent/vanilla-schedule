/**
 * @desc returns all the days from the present day till the end of the month.
 * @returns an array of dates.
 */
const moment = require('moment');

export const getNowTillMonthEnd = () => {
  let startOfWeek = moment().startOf('week');
  let endOfMonth = moment().endOf('month');

  //establish a place to store days and init a day var from mutable moment
  let days = [];
  let day = startOfWeek;

  //runs while the 
  while (day <= endOfMonth) {
    //push the init date into the days array...
    days.push(day.toLocaleString());
    //moments are mutable, so if we don't clone the moment, we will just keep mutating the same moment and storing that.
    day = day.clone().add(1, 'd');
}
  return days;
}