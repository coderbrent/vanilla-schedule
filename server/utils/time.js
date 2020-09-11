export const getNowTillMonthEnd = () => {
  let startOfWeek = moment().startOf('week');
  let endOfMonth = moment().endOf('month');

  //establish a place to store days and init a day var from mutable moment.
  let days = [];
  let day = startOfWeek;

  //runs while the current day is less than the endOfMonth...
  while (day <= endOfMonth) {
    //push the init date into the days array...
    days.push(day.toDate());
    //NOTE: moments are mutable, so if we don't clone the moment first, we will just keep overwriting the same moment and storing that.
    day = day.clone().add(1, 'd');
}
  console.log(days)
  return days;
};