// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(distance){
    let result = distance - 42;
    if (result < 0 ){
        return Math.abs(result)
    } 
    return result
}



function distanceFromHqInFeet(distance){
   return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(sb,eb){
    return Math.abs(sb-eb) * 264;
}

function calculatesFarePrice(start,dest){
    const distance = distanceTravelledInFeet(start,dest);
    if ( distance <= 400 ){
        return 0;
    } else if (distance > 400 && distance <= 2000 ) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else {
        return "cannot travel that far";
    }

}