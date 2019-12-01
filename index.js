// Code your solution in this file!
const logDriverNames = function (drivers) {
    drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = function (drivers, location) {
    logDriverNames((drivers.filter(driver => driver.hometown === location)))
}

const driversByRevenue = function (drivers) {
    return [...drivers].sort((a, b) => a.revenue - b.revenue)
}

const driversByName = function (drivers) {
    return [...drivers].sort((a, b) => {
        var nameA = a.name
        var nameB = b.name
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
}

const totalRevenue = function (drivers) {
    return drivers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.revenue
    }, 0)
}

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length
}