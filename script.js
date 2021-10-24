let turn="X"
let gameOver=false	
const changeTurn = ()=>{
	return turn === "X"?"0":"X";
}

const checkWin = ()=>{
	let wins=[[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[0,3,6],
	[1,4,7],
	[2,5,8]
	]
	let boxes = document.getElementsByClassName("boxtext");
	wins.forEach(e =>{
		if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText === boxes[e[1]].innerText)&&(boxes[e[0]].innerText===boxes[e[2]].innerText)&&(boxes[e[0]].innerText !== "")){
			gameOver=true;
		}
	})

}

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element,index) =>{
	let boxtext = element.querySelector('.boxtext');
	element.addEventListener('click', ()=>{
		if(boxtext.innerText === ''){
			boxtext.innerText = turn// pass index;	//remove this index later		
			checkWin();

			if(gameOver){
				document.getElementsByClassName("info")[0].innerText=turn+" Won "
				// send message that it won
			}
			else{
				turn=changeTurn();
				document.getElementsByClassName("info")[0].innerText="Turn for "+turn
				//send message for turn and index for clicked item
				//wait for turn
				//make returned index as opposites X/0
				let boxes = document.getElementsByClassName("boxtext");
				// boxes[8].innerText="gc";
			}
		}
	})
})

reset.addEventListener('click',()=>{
	let boxtext = document.querySelectorAll(".boxtext");
	Array.from(boxtext).forEach(element=>{
		element.innerText="";
		gameOver=false;
		turn= "X";
		document.getElementsByClassName("info")[0].innerText="Turn for "+turn
		//do this for other player too
	})
})