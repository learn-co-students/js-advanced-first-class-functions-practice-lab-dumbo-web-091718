// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(driver => {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach(driver => {
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  const newArr = drivers.slice().sort((a, b) => { return a.revenue - b.revenue })
  return newArr
}

function driversByName(drivers){
  const newArr = drivers.slice().sort((a, b) => { return a.name.localeCompare(b.name) })
  return newArr
}

function totalRevenue(drivers){
  let revenue = 0
  drivers.forEach(driver => {
    revenue += driver.revenue
  })
  return revenue
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}