// Code your solution in this file!
//log by name
const logDriverNames = function(drivers){
  return drivers.forEach((driver) =>
    console.log(driver.name));
}
//log by hometwon
const logDriversByHometown = function(drivers, hometown){
  return drivers.forEach( (driver) => {
  if (driver.hometown == hometown)
    {
    console.log(driver.name)
     }
  })
}

//driversByRevenue(
const driversByRevenue = (drivers) => {
  return [...drivers].sort((x, y) => x.revenue - y.revenue);
};

//sort by names
const driversByName = (drivers) => {
  return [...drivers].sort((x, y) => x.name.localeCompare(y.name));
}

//uses the reduce() method to sum the revenue of every driver and return the total
const totalRevenue = (drivers) => {
  return [...drivers].reduce((pay, driver) => pay + driver.revenue, 0)
}

//calculates the average revenue across all drivers: Total divided by number of drivers.
 const averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length
