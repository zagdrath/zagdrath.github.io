var tday=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
var tmonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9) nmin="0"+nmin

var clocktext=""+tday[nday]+" "+tmonth[nmonth]+" "+ndate+" "+nyear+" "+nhour+":"+nmin+"";
document.getElementById('clockbox').innerHTML=clocktext;
}
	GetClock();
	setInterval(GetClock,1000);
