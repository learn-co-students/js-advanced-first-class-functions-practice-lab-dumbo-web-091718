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
const driversByRevenue = drivers => {
  return [...drivers].sort((x, y) => x.revenue - y.revenue);
};
