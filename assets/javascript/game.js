var obiwan={
    health: 140,
    damage: -40,
    name: "Obi Wan"
}

var darthmaul={
    health:100,
    damage:-20,
    name: "Darth Maul"
}

var jarjarbinks={
    health:300,
    damage:-3,
    name: "Jar Jar Binks"
}

var darthsidious={
    health: 130,
    damage: -30,
    name: "Darth Sidious"
}

var lukeskywalker={
    health: 130,
    damage: -20,
    name: "Luke Skywalker"
}

var enemy = document.getElementById("enemy")

var selectedCharacter = document.getElementById("selected-character")

//TODO: this function should run each time the current character attacks an enemy, it should change the current character's health, change the enemy's health, and increase selected character's damage by 6

function attack(selectedCharacter, enemy) {
    
    selectedCharacter.health = selectedCharacter.health + enemy.attack;
    
    enemy.health = enemy.health + selectedCharacter.attack;
    
    var totalAttack = selectedCharacter.attack;
    
    totalAttack++;

    $("#info").html("<p>" + "You attacked " + enemy.name + " for " + totalAttack + " damage." + "</p>");
    
    $("#info2").html("<p>" + enemy.name + " attacked you back for " + totalAttack + " ." + "</p>");
}

//TODO: runs to start a new game, should put all characters up at selected character box, reset their health and attack power, should be run after each loss or after all enemies are dead 

function startGame() {
    
    $("#selected-character").html("<div onclick='select('0')' id='obiwan clickable'></div><div onclick='select('1')' id='darthmaul clickable'></div><div onclick='select('2')' id='jarjarbinks clickable'></div><div onclick='select('3')' id='darthsidious clickable'></div><div onclick='select('4')' id='lukeskywalker clickable'></div>")
    
    $("#enemies-available").html("")
    
    $("defender").html("")
    
    if (select === 0) {
        $("#selected-character0").html("<div onclick='select('0')' id='obiwan clickable selected-character'><p>Obi-Wan Kenobi</p><img src='assets/images/obiwan.jpg alt=><p id='HP'></p></div>")
        $("#enemies-avialable1").html("<div onclick='select('1')' id='darthmaul clickable enemy'></div>")
        $("#enemies-avialable2").html("<div onclick='select('2')' id='jarjarbinks clickable enemy'></div>")
        $("#enemies-avialable3").html("<div onclick='select('3')' id='darthsidious clickable enemy'></div>")
        $("#enemies-avialable4").html("<div onclick='select('4')' id='lukeskywalker clickable enemy'></div>")

        //When the enemy is clicked, its html is removed from enemies-available and its html is added to defender, and it becomes 
        
        $("#darthsidious").click(function() {
        
    })
        
        
    }
    
    if (select === 1) {
        $("#selected-character1").html("<div onclick='select('1')' id='darthmaul clickable selected-character'></div>")
        $("#enemies-available0").html("<div onclick='select('0')' id='obiwan clickable enemy'></div>")
        $("#enemies-avialable2").html("<div onclick='select('2')' id='jarjarbinks clickable enemy'></div>")
        $("#enemies-avialable3").html("<div onclick='select('3')' id='darthsidious clickable enemy'></div>")
        $("#enemies-avialable4").html("<div onclick='select('4')' id='lukeskywalker clickable enemy'></div>")
    }
    
    if (select === 2) {
        $("#selected-character2").html("<div onclick='select('2')' id='jarjarbinks clickable selected-character'></div>")
        $("#enemies-available0").html("<div onclick='select('0')' id='obiwan clickable enemy'></div>")
        $("#enemies-avialable1").html("<div onclick='select('1')' id='darthmaul clickable enemy'></div>")
        $("#enemies-avialable3").html("<div onclick='select('3')' id='darthsidious clickable enemy'></div>")
        $("#enemies-avialable4").html("<div onclick='select('4')' id='lukeskywalker clickable enemy'></div>")
    }   
    
    if (select === 3) {
        $("#selected-character3").html("<div onclick='select('3')' id='darthsidious clickable selected-character'></div>")
        $("#enemies-available0").html("<div onclick='select('0')' id='obiwan clickable enemy'></div>")
        $("#enemies-avialable1").html("<div onclick='select('1')' id='darthmaul clickable enemy'></div>")
        $("#enemies-avialable2").html("<div onclick='select('2')' id='jarjarbinks clickable enemy'></div>")
        $("#enemies-avialable4").html("<div onclick='select('4')' id='lukeskywalker clickable enemy'></div>")
    }
   
    if (select === 4) {
        $("#selected-character4").html("<div onclick='select('4')' id='lukeskywalker clickable selected-character'></div>")
        $("#enemies-available0").html("<div onclick='select('0')' id='obiwan clickable enemy'></div>")
        $("#enemies-avialable1").html("<div onclick='select('1')' id='darthmaul clickable enemy'></div>")
        $("#enemies-avialable2").html("<div onclick='select('2')' id='jarjarbinks clickable enemy'></div>")
        $("#enemies-avialable3").html("<div onclick='select('3')' id='darthsidious clickable enemy'></div>")
    }

    


}

 

function startGame();

