let dayofWeek=document.getElementById('blankspace');
let d=document.getElementById('day');
var daylist =["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var date= new Date("May 30 2021");
var day = date.getDay();
var dayName = daylist[day];
d.innerHTML=dayName;
var a =date.toLocaleDateString();
dayofWeek.innerHTML=a;



