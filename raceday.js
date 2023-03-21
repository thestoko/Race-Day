let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false; 
const age = 18;

if (age >= 18 && registeredEarly) {
  raceNumber += 1000;
}
console.log(raceNumber);

  if (age >= 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age >= 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}