let current_position=0;
let row=Math.floor(current_position/6);
let squareDiv=document.querySelector(`#square_${row}_0`);

const arrowImg=document.createElement("img");
arrowImg.src="src/arrow.png";
arrowImg.style.width="44px";
arrowImg.style.height="44px";
arrowImg.style.position="relative";
arrowImg.style.top="0px";
arrowImg.style.left="-55px";

squareDiv.appendChild(arrowImg);