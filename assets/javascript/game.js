//Initizialing variables 
var yourWins=0;
var yourLosses=0;
var tally=0; //Tally at the beginning will be zero
var number=Math.floor((Math.random() * 100) + 19); //This is the number the user has to guess to

	var red = Math.floor((Math.random() * 12) + 1); //Return a random number between 1 and 12
 	var silver = Math.floor((Math.random() * 12) + 1); //Return a random number between 1 and 12
 	var green = Math.floor((Math.random() * 12) + 1); //Return a random number between 1 and 12
 	var blue = Math.floor((Math.random() * 12) + 1); //Return a random number between 1 and 12


//function to update the tally when called
var updateTally = function () { 

 		$('.tally').empty(); //gets the element ID tally and empties it
 		$('.tally').append(tally); //will then append the number scored in the tally variable to the ID 

 		$('#yourWins').empty(); //gets the element ID yourWins and empties it
 		$('#yourWins').append(yourWins); //will then append the number in the wins variable to the ID 

 		$('#yourLosses').empty(); //gets the element ID yourWins and empties it
 		$('#yourLosses').append(yourLosses); //gets the element ID yourWins and empties it



		}

//function to restart all values to how they initially are supposed to be when it is called
 var restart = function (){
 			tally = 0;
 			number = Math.floor((Math.random() * 100) + 19);

 			$('.number').empty(); //gets the ID "number" that is meant to be guessed and empties it
 			$('.number').append(number); //appends the ID "number" with the new number to be guessed that this function has set in line 32

 			//new values assigned to color variables
 			red = Math.floor((Math.random() * 12) + 1); 
 			silver = Math.floor((Math.random() * 12) + 1);
 			green = Math.floor((Math.random() * 12) + 1);
 			blue = Math.floor((Math.random() * 12) + 1);
 			updateTally(); //calls on updateTally function. this will keep track of your wins and losses and now when you start playing again, your tally.
 		}


//function that lays out the logic for how the game will work.
 var game = function (){
 		if (tally == number) { //the winning scenario. your tally matches with the number provided
 			yourWins++; //the yourWins variable will increase and will be appended upon the function call for updateTallh
 			alert("You win!");
 			restart(); //the entire game will restart
 		} else if (tally > number) { //same case as above except loss will happen
 			yourLosses++;
 			alert("You lost");
 			restart();
 		} else {
 			updateTally(); //until one of the above conditions is met, the tally will keep being updated
 		}
 	}

$('.number').append(number); //the initial number to guess when you first open the page
$('.tally').append(tally); //the initial tally you have when you first open the page


 $(document).ready(function() { 
 	$('#red').click(function(){
 			tally+=red;
 			game();
 		})


 	$('#silver').click(function(){
 			tally+=silver;
 			game();
 		})

 	$('#green').click(function(){
 			tally+=green;
 			game();
 		})

 	$('#blue').click(function(){
 			tally+=blue;
 			game();
 		})



 	//when you click the colored crystal ID areas, the tally will add the variable number red to it. when the game function is called it will call the updateTally function and until you win tally will keep being updated. once you win/lose, the win loss column will be updated
 	});





