
//The values of the npm installation date range picker
//Create a variable that holds the newDate object that shows the current date and time
const now = new Date();
//Create a variable that holds getHours
let hours = now.getHours();
//Here we create an empty array that we will use to push in the values
const times = [];
//Create a if statement that says if now.getminutes is less than 30 then push in the hours in the times array
if (now.getMinutes() < 30) {
  times.push(`${++hours}:30`);
} else {
  hours++;
}
//then we check if the length of the times array is lesser that 48 we push in the hours in the times array
while (times.length < 48) {
  times.push(`${hours}:00`);
  times.push(`${hours}:30`);
  hours = (hours + 1) % 24;
}
export default times;
