function fermeturePorte(){
	img.src="./ressource/porte.gif";
	grim.play();
}

function changementPorte(){
	img.src="./ressource/porte_ouverte.gif";
	grim.play();
	img.onclick=function(){document.location.href='tp2q3.html';};

}
var img = document.getElementById("img1");
var grim = document.getElementById("grin");

img.onmouseover=changementPorte;
img.onmouseout=fermeturePorte;