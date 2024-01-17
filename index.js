function createEmployeeRecord(array) {
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return obj;
};

function createEmployeeRecords(arrayOfArrays) {
    let newArray = [];
    for (let i = 0; i < arrayOfArrays.length; i++) {
        let obj = createEmployeeRecord(arrayOfArrays[i]);
        newArray.push(obj);
    };
    return newArray;
};

function createTimeInEvent(date) {
    let timeInEvent = {
        type: "TimeIn",
        hour: date.slice(-4),
        date: date.slice(0, 10)
    };
    return timeInEvent;
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

