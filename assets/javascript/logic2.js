if {
    jarjarbinks.enemy = "yes";

}

//something could iterate through and check if the isEnemy property is true, then change the text to its html

// a function could add the results to the defender area

//attack button 


var isCurrentDefender = "false"

function attack(selectedCharacter, defender) {
    
    selectedCharacter.health = selectedCharacter.health + defender.attack;
    
    defender.health = enemy.health + selectedCharacter.attack;
    
    var totalAttack = selectedCharacter.attack;
    
    totalAttack++;

    //TODO: make it so if the defender runs out of health, 
    //it dissapears and the defender area knows its empty

    if (defender.health <= 0){
        $("#defender").append("<p> </p>")
        

    }

    //TODO: make it so the game ends and also the info box displays the 
    //game is over

    else if (selectedCharacter.health <= 0){
        $("#selected-character").append("<p> </p>");
        $("info").text("You Died! Get good kid.");
    }

    //TODO: make it so that theres a way to see if all enemies are dead
    //and make it so that a restart button appears that runs the 
    //startGame() function and makes #info say you won

    else if ()

    $("#info").html("<p>" + "You attacked " + enemy.name + " for " + totalAttack + " damage." + "</p>");
    
    $("#info2").html("<p>" + enemy.name + " attacked you back for " + totalAttack + " ." + "</p>");

    if (isCurrentDefender === "false"){
        $("#attackButton").click(function() {
             $("info").text("Click on an enemy to fight them.");
        })
    }
}
