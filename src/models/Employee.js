/**
 * @desc this parent class is used to generate new Employees. It features a variety
 * of methods that apply to the Employee only. Employees follow one simple rule:
 * 
 * 1. They may only view and edit their own schedules. All other details are writable by managers only.
 * 
 * @param {String} name input from the newUser form (manager only)
 * @param {String} phone input from the newUser form (manager only)
 * @param {String} email input from the newUser form (manager only)
 * @param {Buffer} avatar input from the newUser form (manager only)
 * @param {Object} schedule input from the employeeScheduleForm (employee and manager)
 */

module.exports = class Employee {
  constructor({ name, phone, email, avatar, schedule }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.avatar = avatar;
    this.schedule = schedule;
  }

  logEmployee() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.phone);
    console.log(this.avatar);
    console.log(this.schedule);
  }

  /**
   * @desc Sets an employee's shift (start time, end time) for a given day
   *  
   * @param {String} day the day of the week the employee
   * @param {String} start 
   * @param {String} end
   */

  //TODO: Remove the day field and make the schedule simply start and end times.
  //The "day" data is already in the native JS Date instance. 
  setShift(day, start, end) {
    const updatedSched = Object.assign(this.schedule, {
      [day]: {
        start: new Date(start),
        end: new Date(end)
      }
    })
    return updatedSched;
  };

/**
 * @desc Gets the employee's shift (util method).
 * @param {String} day the day of the week to grab for shift info.
 */
  getShift(day) {
    return this.schedule[day];
  };

  /**
   * @desc Gets the employee's shift length of a given day (util method).
   * @param {String} day the day of the week to measure length of shift on.
   */
  getShiftLength(day) {
    let startOfDay = this.schedule[day].start;
    let endOfDay = this.schedule[day].end;

    let diff = (endOfDay - startOfDay) / 1000
    diff /= 60;
    const shiftLength = (Math.abs(Math.round(diff / 60)))
    
    return shiftLength;
  };

  /**
   * @desc Provides the total hours worked based within a given range of days.
   * Example: user inputs tuesday - thursday -> returns sum of hours worked between those days.
   * @param {Array} range an array of multiple selected days worked.
   * @return {String} returns the total hours worked for a given range of days.
   */
  getTotalHoursWorkedByRange(range) { 
    const { startDay, endDay } = range;
    //Gets all the days from an employee's schedule
    //TODO: This could become an issue as the schedule becomes larger...
    const allDaysWorked = Object.keys(this.schedule);
    let total = 0;
  
    let rangeOfDays = 
      allDaysWorked.slice(
        allDaysWorked.indexOf(startDay), 
        allDaysWorked.indexOf(endDay) + 1
      );

    rangeOfDays.forEach(day => {
      let num = this.getShiftLength(day);
      total += num;
    })
    console.log(total)
    return total;
  };

  createSchedule(shifts) {
    
  }
  
};

//if we are storing a users schedule, how much of it do we store?
//schedules are linear time constructs - they have a past, present and future.

const getEmployee = async employeeId => {
  const employee = await fetch(`http://localhost:5000/employees/get-employee/${employeeId}`)
    .then(response => { 
      if(!response) {
        throw new Error('There was a network error.')
      }
        return response.json();
    })
    .then(employeeData => employeeData);

  console.log(employee);
  return employee;
}

const makeSchedule = async (employeeId, shifts) => {
  const employee = getEmployee(employeeId)
  
  console.log(employee);
}

const getSchedule = () => {
  
}





