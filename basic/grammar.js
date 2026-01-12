let myDate = new Date(Date.now());
console.log(myDate);
// 从当天循环到当周周一
function testDays() {
    let daysCount = myDate.getDay();
    const day = new Date(myDate);
    if (daysCount === 0) {
        daysCount = 7;
    }
    const offset = daysCount - 1;
    const days = [];
    for (let i = 0; i < daysCount; i++) {
        let currentDay = new Date(myDate);
        currentDay.setDate(currentDay.getDate()-offset+i);
        days.push(currentDay);
    }
    console.log(days);
    return days;
}

testDays();