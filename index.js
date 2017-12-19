function produceDrivingRange(blockRange) {
  return function(start, end) {
    const trip = Math.abs(start.slice(0, -2) - end.slice(0, -2));
    if (trip <= blockRange) {
      return `within range by ${blockRange - trip}`;
    } else {
      return `${trip - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId; 
    }
  }
}
