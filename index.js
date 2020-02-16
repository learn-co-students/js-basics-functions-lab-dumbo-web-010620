// Code your solution in this file!
function distanceFromHqInBlocks (value) {
  if (value > 42) {
    return value - 42;
  }
  else {
    return 42 - value;
  }
}

function distanceFromHqInFeet (value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet (start , end) {
  if (start > end) {
    return (start - end) * 264;
  }
  else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance <= 400) {
    return 0;
  }
  else if (400 < distance && distance <= 2000) {
    return (distance - 400) * .02;
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
