module.exports = class Employee {
  constructor(name, phone, email, avatar, schedule) {
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

  setUserShift(day, start, end) {
    const updatedSched = Object.assign(this.schedule, {
      [day]: {
        start: new Date(start),
        end: new Date(end)
      }
    })
    return updatedSched;
  }

  getUserShift(day) {
    return this.schedule[day];
  }

  getShiftLength(day) {
    let startOfDay = this.schedule[day].start;
    let endOfDay = this.schedule[day].end;

    let diff = (endOfDay - startOfDay) / 1000
    diff /= 60;
    const shiftLength = (Math.abs(Math.round(diff / 60)))
    
    return shiftLength;
  }

  getTotalHoursWorkedByRange(range) {
    const { startDay, endDay } = range;
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
  }  
}



