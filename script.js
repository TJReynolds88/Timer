// Time 

     var d = new Date();
     var m = d.getMinutes();
     var h = d.getHours();
     document.getElementById('time').innerHTML = h + ':' + m;



     //Timer Circle
     var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.stroke();


// Start Countdown

function start(){
    var e = document.getElementById("selectedTime").value;
    
}



//Cancel Countdown




//Pause Countdown

