var but=[];

for(var i=1;i<10;i++){

but[i]=document.getElementById('canvas'+i);

}

var ctx=[];

for(var i=1;i<10;i++){
	ctx[i]=but[i].getContext('2d');
}

var bdis=[];

for(var i=1;i<10;i++){
	bdis[i]=false;
}

var res=false;
var content=[];


function loop(x){

if(!bdis[x]){
	bdis[x]=true;
	but[x].style.opacity=0.7;

	content[x]='x';
	console.log(2);
	but[x].style.webkitTransform="rotateY(180deg)";
	but[x].style.borderRadius="5%";

	setTimeout(function(){
ctx[x].lineWidth=3;
ctx[x].beginPath();
ctx[x].moveTo(10,10);
ctx[x].lineTo(40,40);
ctx[x].moveTo(40,10);
ctx[x].lineTo(10,40);
ctx[x].stroke();
ctx[x].closePath();
checkWinner();
computerTurn();
console.log(2);

},300);

}




checkWinner();
}


function computerTurn(){
	var r=Math.random();

	if(content[1]=='x' && content[2]=='x' && !bdis[3]) draw0steps(3);
	else if(content[1]=='x' && content[3]=='x' && !bdis[2]) draw0steps(2);
	else if(content[2]=='x' && content[3]=='x' && !bdis[1]) draw0steps(1);

	else if(content[4]=='x' && content[5]=='x' && !bdis[6]) draw0steps(6);
	else if(content[4]=='x' && content[6]=='x' && !bdis[5]) draw0steps(5);
	else if(content[6]=='x' && content[5]=='x' && !bdis[4]) draw0steps(4);

	else if(content[7]=='x' && content[8]=='x' && !bdis[9]) draw0steps(9);
	else if(content[7]=='x' && content[9]=='x' && !bdis[8]) draw0steps(8);
	else if(content[8]=='x' && content[9]=='x' && !bdis[7]) draw0steps(7);

	else if(content[1]=='x' && content[4]=='x' && !bdis[7]) draw0steps(7);
	else if(content[1]=='x' && content[7]=='x' && !bdis[4]) draw0steps(4);
	else if(content[4]=='x' && content[7]=='x' && !bdis[1]) draw0steps(1);

	else if(content[2]=='x' && content[5]=='x' && !bdis[8]) draw0steps(8);
	else if(content[2]=='x' && content[8]=='x' && !bdis[5]) draw0steps(5);
	else if(content[5]=='x' && content[8]=='x' && !bdis[2]) draw0steps(2);

	else if(content[3]=='x' && content[6]=='x' && !bdis[9]) draw0steps(9);
	else if(content[3]=='x' && content[9]=='x' && !bdis[6]) draw0steps(6);
	else if(content[6]=='x' && content[9]=='x' && !bdis[3]) draw0steps(3);

	else if(content[1]=='x' && content[5]=='x' && !bdis[9]) draw0steps(9);
	else if(content[1]=='x' && content[9]=='x' && !bdis[5]) draw0steps(5);
	else if(content[5]=='x' && content[9]=='x' && !bdis[1]) draw0steps(1);

	else if(content[3]=='x' && content[5]=='x' && !bdis[7]) draw0steps(7);
	else if(content[3]=='x' && content[7]=='x' && !bdis[5]) draw0steps(5);
	else if(content[7]=='x' && content[5]=='x' && !bdis[3]) draw0steps(3);

	else if(r<0.1 && !bdis[1]) draw0steps(1);
	//else if(r<0.1 && !bdis[1]) draw0steps(1);
	else if(r<0.2 && !bdis[2]) draw0steps(2);
	else if(r<0.3 && !bdis[3]) draw0steps(3);
	else if(r<0.4 && !bdis[4]) draw0steps(4);
	else if(r<0.5 && !bdis[5]) draw0steps(5);
	else if(r<0.6 && !bdis[6]) draw0steps(6);
	else if(r<0.7 && !bdis[7]) draw0steps(7);
	else if(r<0.8 && !bdis[8]) draw0steps(8);
	else if(r<1 && !bdis[9]) draw0steps(9);
	else computerTurn();

checkWinner();
}

function draw0steps(x){

	bdis[x]=true;
	but[x].style.opacity=0.4;
	content[x]='0';
	but[x].style.webkitTransform="rotateY(180deg)";
	but[x].style.borderRadius="50%";
	setTimeout(function(){
	ctx[x].beginPath();
	ctx[x].lineWidth=3;
	ctx[x].arc(26,26,20,0,Math.PI*2,false);
	ctx[x].stroke();
	ctx[x].closePath();	
	},300);
	


}

function checkWinner(){
	if(!res){
		if(content[1]=='x' && content[2]=='x' && content[3]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[4]=='x' && content[5]=='x' && content[6]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[7]=='x' && content[8]=='x' && content[9]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[1]=='x' && content[4]=='x' && content[7]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[2]=='x' && content[5]=='x' && content[8]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[3]=='x' && content[6]=='x' && content[9]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[1]=='x' && content[5]=='x' && content[9]=='x')
			showWinner("YOU WON MOTHERFUCK");
		else if(content[3]=='x' && content[5]=='x' && content[7]=='x')
			showWinner("YOU WON MOTHERFUCK");


		else if(content[4]=='0' && content[5]=='0' && content[6]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[7]=='0' && content[8]=='0' && content[9]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[1]=='0' && content[4]=='0' && content[7]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[2]=='0' && content[5]=='0' && content[8]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[3]=='0' && content[6]=='0' && content[9]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[1]=='0' && content[5]=='0' && content[9]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[3]=='0' && content[5]=='0' && content[7]=='0')
			showWinner("YOU LOST MOTHERFUCK");
		else if(content[4]=='0' && content[5]=='0' && content[6]=='0')
			showWinner("YOU LOST MOTHERFUCK");



		else if(
				(content[1]=='x' || content[1]=='0')&&
				(content[2]=='x' || content[2]=='0')&&
				(content[3]=='x' || content[3]=='0')&&
				(content[4]=='x' || content[4]=='0')&&
				(content[5]=='x' || content[5]=='0')&&
				(content[6]=='x' || content[6]=='0')&&
				(content[7]=='x' || content[7]=='0')&&
				(content[8]=='x' || content[8]=='0')&&
				(content[9]=='x' || content[9]=='0')
			){
			showWinner("ITS A DRAW MOTHERFUCK,USE BRAIN!");
		console.log(3);
			}
	}
}

function showWinner(y){
	alert(y);
	res=true;
}