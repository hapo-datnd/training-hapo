
var percent = [65,65,65];
var all = 506;
var value = new Array();
var major = ["TEAM WORK","ENGLISH","JAPANESE"];


for (var i = 1; i <= 3  ; i++) {

	value[i-1] = percent[i-1]*all/100;

	var canvas = document.getElementById(String(i)+"textCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "14px Poppins";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(major[i-1],0,14);

	var canvas = document.getElementById(String(i)+"myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#EF5B5B";
	ctx.fillRect(0,0,value[i-1],7);

	var canvas = document.getElementById(String(i)+"textCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "14px Poppins";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(String(percent[i-1])+"%",value[i-1]-7,14);

}

  


