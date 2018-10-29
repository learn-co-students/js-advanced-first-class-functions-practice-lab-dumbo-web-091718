// Code your solution in this file!
const logDriverNames = drivers => {
  return drivers.forEach(driver => {
    console.log(driver.name)
  })
};

const logDriversByHometown = (drivers, location) => {
  return drivers.forEach(driver => {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  })
};

const driversByRevenue = drivers => {
  return [...drivers].sort((a, b) => a.revenue - b.revenue);
};

const driversByName = drivers => {
  return [...drivers].sort((a, b) => a.name.localeCompare(b.name));
}

const totalRevenue = drivers => {
  return [...drivers].reduce((acc, driver) => acc + driver.revenue, 0)
}

const averageRevenue = drivers => totalRevenue(drivers) / drivers.length;