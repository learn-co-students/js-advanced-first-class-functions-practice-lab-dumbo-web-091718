// Code your solution in this file!
function logDriverNames(array) {
  const callback = function(element) {
    console.log(`${element.name}`)
  }
  array.forEach(callback)
}

function logDriversByHometown(array, hometown){
  const callback = function(element) {
    if (element.hometown == hometown)
    console.log(`${element.name}`)
  }
  array.forEach(callback)
}

function driversByRevenue(array){
  let newArray = array.slice()
  const sorted = newArray.sort(function(a, b) {
    return a.revenue - b.revenue
  })
  return sorted
}

function driversByName(array){
  let newArray = array.slice()
  const comparator = function(a, b) {
    return a.name.localeCompare(b.name)
  };
  return newArray.sort(comparator)
}

function totalRevenue(array){
  let totalRev = 0;
  array.forEach(function(element) {
    totalRev += element.revenue
  });
  return totalRev
}

function averageRevenue(array){
  let averageRev;
  let totalRev = 0;
  array.forEach(function(element) {
    totalRev += element.revenue
  });
  averageRev = (totalRev / array.length)
  return averageRev
}
