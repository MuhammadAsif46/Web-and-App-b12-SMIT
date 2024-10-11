var today = new Date();
console.log(today.toString());

var days = ['sun','mon','tue','wed','thr','fri','sat']
// console.log(days[5]);
console.log(days[today.getDay()]);

var doomsday = new Date("June 30, 2035");
// console.log(doomsday.getDate());
// console.log(doomsday.setDate("13"));