
$(document).ready(function() {
	var q = [
				"Etes vous essez fort pour continuer ?", //1
				"quel est mon années de naissances ?",//2
				"avez vous mal au cheveux apres 10h de code de suite ?",//3
				"Node.js n'est pas un framework?",//4
				"par quel organisme angular js a été conçue?",//5
				"sauterez vous d'un pont si on vous le demande",//6
				"quel est l'ecriture d'un smiley souriant",//7
				"bill gate est a l'origine de macintosh",//8
				"le logo d'apple represente une fenetre",//9
				"avez vous aimer ce quizz",//10
			];
	var qrep = [
				["oui", "non", "peut-être", "je ne sais pas"], //1
				["1987", "1664", "1897", "je ne sais pas"],//2
				["parfois","souvent","jamais","non" ],//3
				["oui","non","peut-etre","je ne sais pas"],//4
				["twitter", "facebook","google","redit"],//5
				["non","oui","pourquois pas","peut-etre"],//6
				[":-)","4ge",":-(",";-)"],//7
				["oui","non","cest stevejobs","marc zukerberg"],//8
				["non","oui","cest une pomme","je ne sais pas"],//9
				["oui","non","je ne sais pas","j'ais skipper les question"],//10
				];
	var good = [
				qrep[0][0],
				qrep[1][0],
				qrep[2][3],
				qrep[3][1],
				qrep[4][2],
				qrep[5][0],
				qrep[6][0],
				qrep[7][2],
				qrep[8][2],
				qrep[9][0],
				]; 

	var currentQ = 0;	
	var NbQ = currentQ+1;



function Affich(){
//display question and response auto

	$("#question").text("Qestion n°"+ NbQ + " : "+q[currentQ]);
	$("#rep1").text(qrep[currentQ][0]);
	$("#rep2").text(qrep[currentQ][1]);
	$("#rep3").text(qrep[currentQ][2]);
	$("#rep4").text(qrep[currentQ][3]);
}

function check(){
//check response auto
	$("#rep1, #rep2, #rep3, #rep4").click(function(){
		var check =	$(this).html();
		if(check == good[currentQ]){
			$(this).css("background-color", "green");
			$(this).css("color", "white");

		} else{
			$(this).css("background-color", "red");
			$(this).css("color", "white");
		}
	});	
}


	Affich();
	check();
	



	

		
$("#next").click(function(){
	currentQ++;
	NbQ++;
	Affich();
	check();
	$("#rep1","#rep2","#rep3","#rep4").css("background-color", "white");
	$("#rep1","#rep2","#rep3","#rep4").css("color", "black");
	
});	

$("#prev").click(function(){
	currentQ--;
	NbQ--;
	Affich();
	check();
		

});
		




});