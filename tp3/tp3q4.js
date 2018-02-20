function repertoire(){
	var entete= new XMLHttpRequest();
	var donnees= new XMLHttpRequest();

	var enteteTab=Array();
	entete.open('GET',getServeur()+'telephone.php?entete',true);
	entete.onload=function(){
		if(entete.status==200){
			enteteTab=JSON.parse(entete.responseText);
			while (document.getElementById("thead_tr").firstChild) {
	  			document.getElementById("thead_tr").removeChild(document.getElementById("thead_tr").firstChild);
			}
			enteteTab.forEach(function(element){
				var th = document.createElement("th");
				var nom = document.createTextNode(element);
	    		th.appendChild(nom);
	    		document.getElementById("thead_tr").appendChild(th);
			});
		}else{
			console.log(entete.status);
		}
	};
	entete.send(null);

	donnees.open('GET',getServeur()+'telephone.php?repertoire',true);
	donnees.onload=function(){
		if(donnees.status==200){
			var donneesTab= JSON.parse(donnees.responseText);
			while (document.getElementById("tbody").firstChild) {
	  			document.getElementById("tbody").removeChild(document.getElementById("tbody").firstChild);
			}
			donneesTab.forEach(function(element){
				var tr = document.createElement("tr");
				enteteTab.forEach(function(i){
					var th = document.createElement("th");
					var donnee = document.createTextNode(element[i.toLowerCase()]);
		    		th.appendChild(donnee);
		    		tr.appendChild(th);
				});
				var button = document.createElement("button");
				var t = document.createTextNode("Suppr");
				button.onclick=function(){
					var del= new XMLHttpRequest();
					del.open('DELETE',getServeur()+'telephone.php?repertoire',true);
					del.onload=function(){
						if(del.status==204){
							repertoire();
						}else{
							console.log(ajout.status);
						}
					};
					var jsonDel= '{"nom":"'+element["nom"]+'"}'
					del.send(jsonDel);
				};
				button.appendChild(t);
				tr.appendChild(button);
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
	document.getElementById("addPlace").style="display:block;";
}

function onclickEnvoyer(){
	var ajout= new XMLHttpRequest();
	add.style="display:block;";
	document.getElementById("addPlace").style="display:none;";

	ajout.open('PUT',getServeur()+'telephone.php?repertoire',true);
	ajout.onload=function(){
		if(ajout.status==201){
			repertoire();
		}else{
			console.log(ajout.status);
		}
	};
	ajout.send('{"nom":"'+ document.getElementById("nom").value+'","numero":"'+document.getElementById("numero").value+'"}');
}
function init(){
	document.getElementById("actualiser").onclick=repertoire;
	document.getElementById("Add").onclick=onclickAdd;
	document.getElementById("envoyer").onclick= onclickEnvoyer;
}

function getServeur(){
	var serveur= 'http://192.168.2.5/ajax/';
	return serveur;
}

init();
repertoire();
setInterval(function(){ repertoire(); }, 120000);