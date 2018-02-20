function getRandom() {
  return Math.trunc((Math.random()*7)+1);
}

function positionFleur(e){
	var numero= getRandom().toString();
	var img = document.createElement("img");
	body.appendChild(img);
	
	img.src= "./ressource/fleur"+numero+"a.png";
	img.onload= function(){
		var dx = e.clientX-(img.width/2);
		var dy = e.clientY-img.height+20;
		img.style="position:absolute; top:"+[dy]+"px;left:"+[dx]+"px;";
		if (numero == 4){
			img.draggable="true";
			img.addEventListener('dragstart', function(e) {
				img.id="drag";
			});
		}else{
			img.draggable=false;
		}
	};
	if (numero == 4){
		img.draggable="true";
	}
}

var body = document.getElementById("body");
body.onclick=positionFleur;

body.addEventListener('dragover', function(e) {
    e.preventDefault(); // Annule l'interdiction de drop
    console.log("coucou");
   
});

body.addEventListener('drop',function(e){
	console.log("titi");
	var img= document.getElementById("drag");
    var dx = e.clientX-(img.width/2);
	var dy = e.clientY-img.height+20;
	img.style="position:absolute; top:"+[dy]+"px;left:"+[dx]+"px;";
	img.id="";
});