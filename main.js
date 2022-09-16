const display = document.getElementById('clock');
const dt = document.getElementById('dt');
const alarmSelection = document.querySelectorAll('select');
setAlarm = document.querySelector('button');

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    alarmSelection[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    alarmSelection[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    alarmSelection[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function updateTime() {
    const date = new Date();

    let hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    let amorPm = 'AM';
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (hour > 12) {
        amorPm = "PM";
        hour = (hour - 12);
    }
    if (hour === 12) {
        hour = 12;
        amorPm = 'PM';
    }

    display.innerText = `${hour}:${minutes}:${seconds} ${amorPm}`;
    dt.innerText = monthArr[month] + ", " + day + ", " + year;
    let time = `${alarmSelection[0].value}:${alarmSelection[1].value}:${"00"} ${alarmSelection[2].value}`;
   if (time === `${hour}:${minutes}:${seconds} ${amorPm}`) {
        alert('WAKE UP!!!');
    }
}







function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setInterval(updateTime, 1000);




