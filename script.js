
setInterval(showTime, 1000);

let chooseFormat = 'a';

function changeFormat(){

  if (chooseFormat === 'a') {
    chooseFormat = 'b';

  }
  else  if (chooseFormat === 'b')
    chooseFormat = 'a';
 }


function showTime(){


var today = new Date();
var day = today.getDay();

//for the day
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log("Today is : " + daylist[day] + ".");
document.getElementById("day").innerText= daylist[day] ;

//for the hours

if (chooseFormat === 'a') {

  document.getElementById("session").style.display= "initial";
  document.getElementById("divSession").style.display= "initial";
  document.getElementById("divhours").style.marginLeft= "initial";
  document.getElementById("divhours").style.marginRight= "initial";





var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " : " + second
);
document.getElementById("hours").innerText= hour ;
document.getElementById("minutes").innerText= minute ;
document.getElementById("seconds").innerText= second ;
document.getElementById("session").innerText= prepand ;

}
else if (chooseFormat=== 'b'){
  document.getElementById("session").style.display= "none";
  document.getElementById("divSession").style.display= "none";
  document.getElementById("divhours").style.marginLeft= "27vw";
  document.getElementById("divhours").style.marginRight= "5vw";



    
var today = new Date();
var day = today.getDay();
  var hourNew = today.getHours();
  var minuteNew = today.getMinutes();
  var secondNew = today.getSeconds();
  var prepandNew = hour >= 12 ? " PM " : " AM ";
  hour = hour >= 12 ? hour - 12 : hour;
  if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Noon";
    } else {
      hour = 12;
      prepand = " PM";
    }
  }
  if (hour === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Midnight";
    } else {
      hour = 12;
      prepand = " AM";
    }
  }
  console.log(
    "Current Time : " + hourNew + prepandNew + " : " + minuteNew + " : " + secondNew
  );
  document.getElementById("hours").innerText= hourNew ;
  document.getElementById("minutes").innerText= minuteNew ;
  document.getElementById("seconds").innerText= secondNew ;
  document.getElementById("session").innerText= prepand ;
}


//for the date
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm === 1) {
  mm = "January";
}
else if (mm === 2) {
  mm = "Febriury";
}
else if (mm === 3) {
  mm = "March";
}
else if (mm === 4) {
  mm = "April";
}
else if (mm === 5) {
  mm = "May";
}
else if (mm === 6) {
  mm = "Jun";
}
else if (mm === 7) {
  mm = "July";
}
else if (mm === 8) {
  mm = "August";
}
else if (mm === 9) {
  mm = "September";
}
else if (mm === 10) {
  mm = "October";
}
else if (mm === 11) {
  mm = "November";
}
else if (mm === 12) {
  mm = "December";
}

today = mm + " " + dd + " ," + yyyy;
console.log(today);
document.getElementById("date").innerText= today ;

}


