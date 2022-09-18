//Set all variables and grab elements
const display = document.getElementById('clock'); //var to display clock
const dt = document.getElementById('dt'); //var for day
const alarmSelection = document.querySelectorAll('select'); //var for selection input
setAlarm = document.querySelector('button');
ringtone = new Audio("assets/nono.mp3"); //set audio to ringtone

//loop through hour selections. starting at 12 incremementing down. inserting each digit at the end
for (let i = 12; i > 0; i--) {
    i = i < 10 ? `${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    alarmSelection[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

//loop through minute selections. starting at 59 incrementing down. inserting each digit at end.
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    alarmSelection[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

//loop through am/pm. add each to end
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    alarmSelection[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function updateTime() {        //declare updateTime function
    const date = new Date();    //set date const to new Date
    let hour = date.getHours();         //getHours prototype to hour var
    const minutes = formatTime(date.getMinutes());  //getMinutes prototype to minutes const
    const seconds = formatTime(date.getSeconds());  //getSeconds prototype to seconds const
    let amorPm = 'AM';          //set amorPm as am
    const day = date.getDate();     //var for day
    const year = date.getFullYear();    //var for full year
    const month = date.getMonth();      //month by number
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  //array for months

    //format time function to add 0 in front of time if time is a single digit.
    function formatTime(time) {
        if (time < 10) {
            return '0' + time;
        }
        return time;
    }

    // if statement to convert military time to HHMMSS
    if (hour > 12) {
        amorPm = "PM";
        hour = formatTime(hour - 12); //subtract 12 from hour to get regular time format
    }

    // if statement to set hour to 12 if hour equals 12. otherwise shows 0
    if (hour === 12) {
        hour = 12;
        amorPm = 'PM';
    }

    display.innerText = `${hour}:${minutes}:${seconds} ${amorPm}`; //show clock on page. template literal to insert variables into string
    dt.innerText = monthArr[month] + ", " + day + ", " + year;   //select month depending on number from the month array 
    let alarmTime = `${alarmSelection[0].value}:${alarmSelection[1].value}:${"00"} ${alarmSelection[2].value}`; //select alarm time from input field. template literal for string

    //check if alarm time = template literal from innerText. if equal play ringtone set.
    if (alarmTime === `${hour}:${minutes}:${seconds} ${amorPm}`) {
        ringtone.play();
        ring.loop = true;
    }
}


setInterval(updateTime, 1000); //update time every 1000 milliseconds




