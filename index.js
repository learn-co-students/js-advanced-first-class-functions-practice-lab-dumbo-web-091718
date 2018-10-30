// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach( function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach( function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let newDrivers = [...drivers]

  function compare(a, b) {
    if (a.revenue < b.revenue) {
      return -1
    } else if (a.revenue > b.revenue) {
      return 1
    } else
      return 0
    }

    return newDrivers.sort(compare)
}

function driversByName(drivers) {
  let sorted = [...drivers]

  function compare(a, b) {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    } else
      return 0
    }

  return sorted.sort(compare)
}

function totalRevenue(drivers) {
  driversArr = []

  drivers.forEach( function(driver) {
    driversArr.push(driver.revenue)
  })

  return driversArr.reduce( function (driver, currValue) {
    return driver + currValue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
