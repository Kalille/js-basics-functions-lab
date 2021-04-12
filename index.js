// Code your solution in this file!

function distanceFromHqInBlocks(home){
   const hq = 42
    let distance = Math.abs(home - hq )
    return distance

}
   



function distanceFromHqInFeet(distance) {
    //distanceFromHqInBlocks(home)
  return (distanceFromHqInBlocks(distance) * 264);
 
}
function distanceTravelledInFeet(home, hq){
return Math.abs(home - hq)*264;

}

function calculatesFarePrice(num1,num2){
   let dtif = distanceTravelledInFeet(num1,num2)
    if (dtif <= 400)
{return 0;}

//}
//} 
else if (dtif > 400 && dtif < 2000)
{return (dtif-400) * 0.02 }

else if (dtif >= 2001 && dtif < 2499)
{return 25}


  else 
  {return 'cannot travel that far'}
}

