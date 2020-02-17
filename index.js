// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
        return distance - 42;
    }
    else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end){
    if (start < end){
        return (end - start) * 264;
    }
    else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) >= 2500){
        return "cannot travel that far";
    }
    else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000){
        return (distanceTravelledInFeet(start, end) - 400) * 0.02;
    }
    else {
        return 0;
    }
}