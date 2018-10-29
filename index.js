// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(arr, loc) {
  arr.forEach(function(driver) {
    if (driver.hometown == loc) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(arr) {
  let sortedDrivers = arr.slice()
  const revenueSorter = function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  };
  return sortedDrivers.sort(revenueSorter)
}

function driversByName(arr) {
  let sortedDrivers = arr.slice()
  function nameCompare(driverA,driverB) {
  if (driverA.name < driverB.name)
    return -1;
  if (driverA.name > driverB.name)
    return 1;
  return 0;
  }
  return sortedDrivers.sort(nameCompare)
}

function totalRevenue(arr) {
  function sumArr(sum, driver){
    return sum + driver.revenue;
  };
  let summed = arr.reduce(sumArr, 0);
  return summed;
}

function averageRevenue(arr) {
  function sumArr(sum, driver){
    return sum + driver.revenue;
  };
  let summed = arr.reduce(sumArr, 0);
  return summed/arr.length;
}
