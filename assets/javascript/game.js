//global variable

var crystal = {
        blue: {
            name: "Blue",
            value: 0

             },
 		green: {
 			name: "Green",
 			value: 0
 		},

 		red: {

 			name: "Red",
 			value: 0
 		},

		yellow: {
			name: "Yellow",
			value: 0
		}

};

//Scores (current and target score)
var currentScore =0;
var targetScore =0; 

//Wins and Loses

var winCount =0
var lossCount=0;




//functions
var getRandom= function(min,max){
	return Math.floor (Math.random()*(max- min + 1)) + min; 
}


//Starts the game and restarts the game 

var startGame= function() {

   currentScore=0;

  targetScore= getRandom(19,120);

  crystal.blue.value= getRandom(1,12);
  crystal.green.value= getRandom(1,12);
  crystal.red.value= getRandom(1,12);
  crystal.yellow.value= getRandom(1,12);

//Change HTML

$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);


//testing

console.log( "Target Score: "+ targetScore);
console.log("blue:" + crystal.blue.value);
console.log ("green:" + crystal.green.value);
console.log("red:" +crystal.red.value);
console.log("yellow:" + crystal.yellow.value);

}

//Respond to Click on the crystal

var addValues= function(crystal) {

currentScore= currentScore + crystal.value;



//change the html to reflect changes in current score

$("#yourScore").html(currentScore);


checkWin();


//testing concole
console.log("Your Score:" + currentScore);

}


//Check if user won or lost and rest the game 



var checkWin = function(){

   //check if currentScore is larger then targetScore

   if(currentScore > targetScore){
   	 alert ("You Lost!");
   	 console.log("You Lost");

   	 //Add to loss counter
   	 lossCount++;

   	 //change html
    
      $("#lossCount").html(lossCount);

      //restart game

      startGame();

   }

else if (currentScore == targetScore){
	alert("Congrats, You Win!");
	console.log ("you win");


	//add to the win counter

	winCount++;


	//change html
  $("#winCount").html(winCount);

//restart the game
 startGame();


}


}




//Main Process
//starts the game 


  startGame();   


$("#blue").click(function() {
	addValues(crystal.blue);
});


$("#green").click(function() {
	addValues(crystal.green);
});

$("#red").click(function() {
	addValues(crystal.red);
});

$("#yellow").click(function() {
	addValues(crystal.yellow);
});
        //calling functions



  