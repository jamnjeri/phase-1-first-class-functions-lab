// Code your solution in this file!

//Return a new array containing the first two drivers from the passed-in array
const driverName = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (){
  return driverName.slice(0,2);
}
const returnLastTwoDrivers = function (){
    return driverName.slice(2);
}

//Array that Returns returnFirstTwoDrivers and returnLastTwoDrivers as its contents
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Returns a function that performs multiplication
function createFareMultiplier(num1){
    const fare= (num2) => num1 * num2
    return fare;
}
//Double the fare
const fareDoubler = createFareMultiplier(2)

  //Triple the fare
const fareTripler = createFareMultiplier(3)

//Array that Returns either first two drivers or last two drivers
function selectDifferentDrivers(driverName, two){
    if (two === returnFirstTwoDrivers){
      return returnFirstTwoDrivers();
    }
    else if (two === returnLastTwoDrivers){
      return returnLastTwoDrivers();
    }
  }
