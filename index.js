// Code your solution in this file!
const logDriverNames = function(array){
  array.forEach(function (el) {
    console.log(el.name);
  })
}

const logDriversByHometown = function(array, string){
  array.forEach(function (el) {
    if (el.hometown === string){
      console.log(el.name);
    }
  })
}

const driversByRevenue = function(array){
  return array.slice().sort(function(el, el2) {
    return el.revenue - el2.revenue;
  })
}

const driversByName = function(array){
  return array.slice().sort(function(el, el2){
    return el.name.localeCompare(el2.name);
  })
}

const totalRevenue = function(array){
  return array.reduce(function (total, el) {
    return el.revenue + total;
  }, 0);
}

const averageRevenue = function(array){
  return totalRevenue(array) / array.length;
}
