function repertoire(){
	entete.open('GET','http://192.168.2.5/ajax/telephone.php?entete',true);
	entete.onload=function(){
		if(entete.status==200){
			enteteTab=JSON.parse(entete.responseText);
			while (thead_tr.firstChild) {
	  			thead_tr.removeChild(thead_tr.firstChild);
			}
			enteteTab.forEach(function(element){
				var th = document.createElement("th");
				var nom = document.createTextNode(element);
	    		th.appendChild(nom);
	    		thead_tr.appendChild(th);
			});
		}else{
			console.log(entete.status);
		}
	};
	entete.send(null);

	donnees.open('GET','http://192.168.2.5/ajax/telephone.php?repertoire',true);
	donnees.onload=function(){
		if(donnees.status==200){
			donneesTab= JSON.parse(donnees.responseText);
			while (tbody.firstChild) {
	  			tbody.removeChild(tbody.firstChild);
			}
			donneesTab.forEach(function(element){
				var tr = document.createElement("tr");
				enteteTab.forEach(function(i){
					var th = document.createElement("th");
					var donnee = document.createTextNode(element[i.toLowerCase()]);
		    		th.appendChild(donnee);
		    		tr.appendChild(th);
				});
				tbody.appendChild(tr);
			});
		}else{
			console.log(donnees.status);
		}
	};
	donnees.send(null);
}


function onclickAdd(e){
	add.style="display:none;";
	addPlace.style="display:block;";
}

function onclickEnvoyer(){
	add.style="display:block;";
	addPlace.style="display:none;";
	console.log(inputNom.value);
	console.log(inputNumero.value);
	var jsonAjout= '{"nom":"'+inputNom.value+'","numero":"'+inputNumero.value+'"}'
	ajout.open('PUT','http://192.168.2.5/ajax/telephone.php?repertoire',true);
	ajout.onload=function(){
		if(ajout.status==201){
			repertoire();
		}else{
			console.log(ajout.status);
		}
	};
	ajout.send(jsonAjout);
}

var inputNom = document.getElementById("nom");
var inputNumero = document.getElementById("numero");
var addPlace = document.getElementById("addPlace");
var add = document.getElementById("Add");
add.onclick=onclickAdd;

var envoyer = document.getElementById("envoyer");
envoyer.onclick= onclickEnvoyer;

var donneesTab=Array();
var enteteTab=Array();
var entete= new XMLHttpRequest();
var donnees= new XMLHttpRequest();
var ajout= new XMLHttpRequest();
var thead_tr = document.getElementById("thead_tr");
var tbody = document.getElementById("tbody");

repertoire();