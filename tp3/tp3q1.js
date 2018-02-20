var donneesTab=Array();
var enteteTab=Array();
var entete= new XMLHttpRequest();
var thead_tr = document.getElementById("thead_tr");
var tbody = document.getElementById("tbody");

entete.open('GET','http://192.168.2.5/ajax/telephone.php?entete',true);

entete.onload=function(){
	if(entete.status==200){
		enteteTab=JSON.parse(entete.responseText);
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


var donnees= new XMLHttpRequest();
donnees.open('GET','http://192.168.2.5/ajax/telephone.php?repertoire',true);

donnees.onload=function(){
	if(donnees.status==200){
		donneesTab= JSON.parse(donnees.responseText);
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