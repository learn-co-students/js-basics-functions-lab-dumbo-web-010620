// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let fromHq = blocks - 42;
    return Math.abs(fromHq);
}

function distanceFromHqInFeet(feet) {
    let infeet = distanceFromHqInBlocks(feet)*264
    return infeet
}

function distanceTravelledInFeet(start,finish) {
    let fromHq = (finish - start) * 264;
    return Math.abs(fromHq);
}

function calculatesFarePrice(start, destination) {
   let trip = distanceTravelledInFeet(start,destination);
   if (trip <= 400){
   return 0;
   } else if (trip >= 400 && trip <= 2000) {
    return  .02 * (trip - 400);
   } else if (trip > 2000 && trip < 2500) {
       return 25;
   } else {
   return 'cannot travel that far';
   }
}
