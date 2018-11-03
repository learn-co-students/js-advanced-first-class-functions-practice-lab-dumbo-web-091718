// Code your solution in this file!
function logDriverNames(array) {
  array.forEach( el => console.log(el.name))
}

function logDriversByHometown(array, location) {
  array.forEach(el => {
    if (el.hometown === location) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(array) {
  return array.slice().sort(function (a,b) {
    return a.revenue - b.revenue
  })
}

function driversByName(array) {
  return array.slice().sort(function (a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(array) {
  return array.reduce(function(total, driver) {
    return driver.revenue + total
  }, 0)
}

function averageRevenue(array) {
  return totalRevenue(array)/array.length
}
