// get name of day from date, eg: 2020-04-25

export const getDayName = (date) => {
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(date);
  let dayName = dayArray[d.getDay()];
  return dayName;
};

// work out percentage of, eg: 100 cases, 5 deaths. format result = 5% death rate rounded to 2nd decimal

export const percentageOf = (value, valueOf) => {
  let result = (100 / value) * valueOf;
  let formatResult = result.toFixed(2);
  return formatResult;
};

//avoid blank spot from a null return

export const returnZeroIfNull = (value) => {
  if (value === null) {
    return 0;
  } else return value;
};

// show the increase from previous day

export const displayIncrease = (newVal, oldVal) => {
  let valDiff = newVal - oldVal;
  return valDiff;
};

// work out and return how much has been added to a value

export const valueIncrease = (oldVal, newVal) => {
  return newVal - oldVal;
};
