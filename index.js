// Code your solution in this file!
const headquarters = 42 ;
function distanceFromHqInBlocks(pickUp){
    if(pickUp >= 42){
        return pickUp - headquarters ; 
}else if (pickUp < 42 ){
    return headquarters - pickUp ;
}
}
const blocksFromHq = distanceFromHqInBlocks(50);
console.log(blocksFromHq)


function distanceFromHqInFeet(pickUp){
    const feetLong = 264;
    return    distanceFromHqInBlocks(pickUp) * feetLong ; 
}
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start , end){
    if(start < end){
        return (  end - start)* 264 ;
    }else if (start > end){
        return ( start - end)* 264 
    }
}
 console.log(distanceTravelledInFeet(50, 58))

function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);

    if( feetTravelled < 400){
        return 0

    }else if(feetTravelled > 2500){
        return "cannot travel that far"

    } else if(feetTravelled >= 400 && feetTravelled <= 2000){
        return ( feetTravelled - 400  )* 0.02;

    } else if(feetTravelled >= 2000 && feetTravelled <= 2500){
        return 25;                                    
    }
  }
  console.log(calculatesFarePrice(50, 58))