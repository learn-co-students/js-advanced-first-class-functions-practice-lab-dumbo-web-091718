// Code your solution in this file!

const logDriverNames = function (drivers) {

  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers, location) {

  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driv1, driv2) {
    return driv1.revenue - driv2.revenue
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driv1, driv2) {
    return driv1.name.localeCompare(driv2.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
