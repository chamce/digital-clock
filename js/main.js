const day = document.querySelector('.day');
const time = document.querySelector('.time');
const date = document.querySelector('.date');

function getTime() {
    // create date object
    let d = new Date();
    // get current hour
    let h = d.getHours();
    // get current minute
    let m = d.getMinutes();
    // get current second
    let s = d.getSeconds();
    // set to am
    let am = 'AM';
    // change to pm if military hour is > 11
    if (h > 11) {
        am = 'PM';
    }
    // change from military hour
    if (am === 'PM') {
        h -= 12;
    }
    // add 0 to front of h, m, or s if < 10
    if (h < 10 || m < 10 || s < 10) {
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
    }
    // display time
    time.textContent = h+':'+m+':'+s+' '+am;
    // get current day of month
    let dayMonth = d.getDate();
    // get current month in number
    let month = d.getMonth() + 1;
    // set month in english
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
    // get current year
    let year = d.getFullYear();
    // display date
    date.textContent = month+' '+dayMonth+','+year;
    // get current day of week in number
    let dayWeek = d.getDay();
    // set day of week in english
    switch (dayWeek) {
        case 1:
            dayWeek = 'Monday';
            break;
        case 2:
            dayWeek = 'Tuesday';
            break;
        case 3:
            dayWeek = 'Wednesday';
            break;
        case 4:
            dayWeek = 'Thursday';
            break;
        case 5:
            dayWeek = 'Friday';
            break;
        case 6:
            dayWeek = 'Saturday';
            break;
        case 7:
            dayWeek = 'Sunday';
            break;
    }
    // display day
    day.textContent = dayWeek;
}

// get time when page loads
getTime();
// update time every second
setInterval(getTime, 1000);