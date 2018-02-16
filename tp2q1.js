function Entry(name, phone){
	this.name=name;
	this.phone= phone;
}

Entry.prototype.display=function(){
	console.log(this.name+"\t"+this.phone);
}

let tableau=Array();
let i=0;
let nom = prompt("Veuillez entrer le nom : ","");
let numTel= prompt( "Veuillez entrer le numero de telephone : ","");
while((nom != "") &&(nom != null) && (numTel != "") &&(numTel != null)){
	let entree = new Entry(nom,numTel);
    tableau[i]= entree;
    i++;
    nom= prompt("Veuillez entrer votre nom","");
    numTel= prompt( "Veuillez entrer le numero de telephone : ","");
}

var tab = document.getElementById("t1");
tableau.sort(function(a,b){return a.name>b.name?1:-1});
tableau.forEach(function(element) {
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var name = document.createTextNode(element.name);
    var tel= document.createTextNode(element.phone);
    th1.appendChild(name);
    th2.appendChild(tel);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.style="border: thick double #32a1ce;"
    tab.appendChild(tr);
    tab.style="display:block;"
});