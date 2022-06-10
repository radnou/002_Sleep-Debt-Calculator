

/**
 * 
 * @param day 
 * @returns the number of hours of sleep based on the day.
 */

const getSleepHours = (day) => {
  if (day == "monday") {
    return 8;
  } else if (day == "tuesday") {
    return 5;
  } else if (day == "wednesday") {
    return 9;
  } else if (day == "thursday") {
    return 10;
  } else if (day == "friday") {
    return 4;
  } else if (day == "saturday") {
    return 12;
  } else if (day == "sunday") {
    return 14;
  } else {
    console.log("Day not recognized");
    return -1;
  }
};

console.log(getSleepHours("monday"));
console.log(getSleepHours("tuesday"));
console.log(getSleepHours("wednesday"));
console.log(getSleepHours("thursday"));
console.log(getSleepHours("friday"));
console.log(getSleepHours("saturday"));
console.log(getSleepHours("sunday"));
console.log(getSleepHours("dsqfsqdf"));


/**
 * 
 * @returns the amont of hours of sleep on the week.
 */
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};



/**
 * 
 * @returns the ideal amount of sleep hour for a week
 */
 const getIdealSleepHours = idealHours => idealHours * 7 
console.log(getActualSleepHours());
console.log(getIdealSleepHours());


/**
 * 
 * @returns An analysis based on the amount of sleep and the ideal hours of sleep for a week 
 */
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  const sleepDebt = actualSleepHours - idealSleepHours;

  if (sleepDebt == 0) {
    return "You have the perfect amount of sleep";
  } else if (sleepDebt > 0) {
    return "You have more sleep that needed, about of " + sleepDebt;
  } else {
    return (
      "You need to rest more, you need " + sleepDebt * -1 + "hours of sleep"
    );
  }
};

console.log(calculateSleepDebt());