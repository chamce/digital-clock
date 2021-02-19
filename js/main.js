const day = document.querySelector('.day');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const btn = document.querySelector('button');

function getTime() {
    // get date information for right now
    let now = new Date();
    // get current hour
    let hour = now.getHours();
    // get current minute
    let minute = now.getMinutes();
    // get current second
    let second = now.getSeconds();
    // get am or pm
    let am = amOrPm(hour);
    // change hour from military time if button is standard
    if (btn.className === 'standard') {
        hour = fromMilitaryTime(am, hour);
    // leave in military time otherwise and remove am
    } else {
        am = '';
    }
    // display time
    displayTime(hour, minute, second, am);
    // get current day of month
    let dayOfMonth = now.getDate();
    // get current month
    let month = getMonthString(now);
    // get current year
    let year = now.getFullYear();
    // display date
    date.textContent = month + ' ' + dayOfMonth + ',' + year;
    // get current day of week
    let dayOfWeek = getDayOfWeekString(now);
    // display day of week
    day.textContent = dayOfWeek;
}

function amOrPm(hour) {
    // return pm if hour 12-23
    if (hour > 11) {
        return 'PM';
    }
    // return am if hour 0-11
    return 'AM';
}

function fromMilitaryTime(am, hour) {
    // subtract 12 from hour if pm
    if (am === 'PM') {
        hour -= 12;
    }
    return hour;
}

function displayTime(hour, minute, second, am) {
    // if hour, minute, or second are less than 10
    if (hour < 10 || minute < 10 || second < 10) {
        // add a 0 in front of them
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (second < 10) {
            second = '0' + second;
        }
    }
    // display time
    time.textContent = hour + ':' + minute + ':' + second + ' ' + am;
}

function getMonthString(now) {
    // get month number
    let month = now.getMonth() + 1;
    // switch month to string
    switch (month) {
        case 1:
            month = 'Jan';
            break;
        case 2:
            month = 'Feb';
            break;
        case 3:
            month = 'Mar';
            break;
        case 4:
            month = 'Apr';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'Jun';
            break;
        case 7:
            month = 'Jul';
            break;
        case 8:
            month = 'Aug';
            break;
        case 9:
            month = 'Sep';
            break;
        case 10:
            month = 'Oct';
            break;
        case 11:
            month = 'Nov';
            break;
        case 12:
            month = 'Dec';
            break;
    }
    return month;
}

function getDayOfWeekString(now) {
    // get day of week number
    let dayOfWeek = now.getDay();
    // switch day of week to string
    switch (dayOfWeek) {
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
        case 0:
            dayOfWeek = 'Sunday';
            break;
    }
    return dayOfWeek;
}

btn.onclick = function () {
    if (btn.className === 'standard') {
        btn.setAttribute('class', 'military');
        btn.textContent = 'To 12-hour time';
        getTime();
    } else {
        btn.setAttribute('class', 'standard');
        btn.textContent = 'To 24-hour time';
        getTime();
    }
}

// get time when page loads
getTime();
//update time every second
setInterval(getTime, 1000);