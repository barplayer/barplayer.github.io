function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
var hd=h;
document.getElementById('clock').innerHTML=(hd=0?"12":hd>12?hd-12:hd)+":"+m+":"+s+" "+(h<12?"AM":"PM");
document.getElementById("clock").style.fontSize = "18px";
document.getElementById("clock").style.textAlign = "right";
document.getElementById("clock").style.padding = "5px 20px";

t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
