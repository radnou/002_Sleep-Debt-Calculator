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

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
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