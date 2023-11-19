function getSleepHours(day) {
  if (day === 'saturday' || day === 'sunday' || day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    return 8;
  } else {
    return 'error';
  }
}

function getActualSleepHours() {
  return getSleepHours('saturday') + getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');
}

function getIdealSleepHours(idealHours) {
  return idealHours * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(8); // Update with your preferred ideal hours per night

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect Amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Gets more than needed sleep');
  } else {
    console.log('Get more sleep dude');
  }
}

calculateSleepDebt();
