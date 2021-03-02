
document.getElementById("btn").addEventListener("click", function() {
    RandomNumber()
  });

function RandomNumber()
{   

    document.getElementById("rand").innerHTML=randgenerator(99999999,10000000);
}

function randgenerator(max,min){
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}


function datediff(){
    var date =document.getElementById("date").value;
    var today = new Date();
    var month=date.split("-")[1]
    var day =date.split("-")[2]
    var year =date.split("-")[0]
    var userDate=new Date(month+"/"+day+"/"+year)
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

currentdate = new Date(mm + '/' + dd + '/' + yyyy);
var Difference_In_Time = currentdate.getTime() - userDate.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
document.getElementById("day").innerHTML=Difference_In_Days
document.getElementById("year").innerHTML=Math.abs(yyyy-year)
document.getElementById("month").innerHTML=Math.round(Difference_In_Days/30)
document.getElementById("minutes").innerHTML=Difference_In_Time/(60000)
document.getElementById("seconds").innerHTML=Difference_In_Time/1000
document.getElementById("milli").innerHTML=Difference_In_Time
}