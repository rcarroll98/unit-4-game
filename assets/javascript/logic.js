var obiwan={
    health: 140,
    damage: -40,
    name: "Obi Wan",
    html: "<div class= 'char' id='obiwan'><p>Obi-Wan Kenobi</p><img src='assets/images/obiwan.jpg' alt='Obi-Wan'><p id='obiwan-HP'>140</p></div>",
    isSelectedChar: "yes",
    isDefender: "no",
    isAlive: "yes"
}

var darthmaul={
    health:100,
    name: "Darth Maul",
    damage:-20,
    html: "<div class= 'char' id='darthmaul'><p>Darth Maul</p><img src='assets/images/darthmaul.jpg' alt='Darth Maul'><p id='darthmaul-HP'>100</p></div>",
    isSelectedChar: "yes",
    isDefender: "no",
    isAlive: "yes"
}

var jarjarbinks={
    health:300,
    damage:-3,
    name: "Jar Jar Binks",
    html:  "<div class= 'char' id='jarjar'><p>Jar-Jar Binks</p><img src='assets/images/jarjarbinks.jpg' alt='Jar Jar'><p id='jarjar-HP'>300</p></div>",
    isSelectedChar: "yes",
    isDefender: "no",
    isAlive: "yes"
}

var darthsidious={
    health: 130,
    damage: -30,
    name: "Darth Sidious",
    html: "<div class= 'char' id='darthsidious'><p>Darth Sidious</p><img src='assets/images/darthsidious.jpg' alt='Darth Sidious'><p id='darthsidious-HP'>130</p></div>",
    isSelectedChar: "yes",
    isDefender: "no",
    isAlive: "yes"
}

var lukeskywalker={
    health: 130,
    damage: -20,
    name: "Luke Skywalker",
    html: "<div class= 'char' id='lukeskywalker'><p>Luke Skywalker</p><img src='assets/images/lukeskywalker.jpg' alt='Luke Skywalker'><p id='lukeskywalker-HP'>130</p></div>",
    isSelectedChar: "yes",
    isDefender: "no",
    isAlive: "yes"
}

var defenderEmpty = "yes"


//Populates the selected character area with every character's html,
//makes it so clicking the character replaces the selected character 
//area with only its html

function startGame() {
    
    $("#selected-character").html(lukeskywalker.html + darthsidious.html + darthmaul.html + obiwan.html + jarjarbinks.html)

    $("#darthsidious").click(function() {
        $("#selected-character").html(darthsidious.html)
        lukeskywalker.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        jarjarbinks.isSelectedChar = "no";
        obiwan.isSelectedChar = "no";
        $("enemies-available").html(lukeskywalker.html + darthmaul.html + obiwan.html + jarjarbinks.html)
    })

    $("#darthmaul").click(function() {
        $("#selected-character").html(darthmaul.html)
        lukeskywalker.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        jarjarbinks.isSelectedChar = "no";
        obiwan.isSelectedChar = "no";
        $("enemies-available").html(lukeskywalker.html + obiwan.html + jarjarbinks.html + darthsidious.html)
    })

    $("#lukeskywalker").click(function() {
        $("#selected-character").html(lukeskywalker.html)
        darthmaul.isSelectedChar = "no";
        jarjarbinks.isSelectedChar = "no";
        obiwan.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        $("enemies-available").html( darthmaul.html + obiwan.html + jarjarbinks.html + darthsidious.htm)
    })

    $("#obiwan").click(function() {
        $("#selected-character").html(obiwan.html)
        lukeskywalker.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        jarjarbinks.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        $("enemies-available").html(lukeskywalker.html + darthmaul.html + jarjarbinks.html + darthsidious.htm)
    })

    $("#jarjar").click(function() {
        $("#selected-character").html(jarjarbinks.html)
        lukeskywalker.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        obiwan.isSelectedChar = "no";
        darthmaul.isSelectedChar = "no";
        $("enemies-available").html(lukeskywalker.html + darthmaul.html + obiwan.html + darthsidious.htm)
    })

    //Makes it so a defender can only be selected if the defender
    //area is empty and the character isnt the player

    
        
    if (darthsidious.isSelectedChar === "no" && defenderEmpty === "yes"){
        $("#darthsidious").click(function() {
            $("#defender").html(darthsidious.html)
            darthsidious.isDefender = "yes";
            defenderEmpty = "no";
            
        })
    }
    if (darthmaul.isSelectedChar === "no" && defenderEmpty === "yes"){
        $("#darthmaul").click(function() {
            $("#defender").html(darthmaul.html)
            darthmaul.isDefender = "yes";
            defenderEmpty = "no";
                  
        })
    }
    if (lukeskywalker.isSelectedChar === "no" && defenderEmpty === "yes"){
        $("#lukeskywalker").click(function() {
            $("#defender").html(lukeskywalker.html)
            lukeskywalker.isDefender = "yes";
            defenderEmpty = "no";
           
        })
    }
    if (obiwan.isSelectedChar === "no" && defenderEmpty === "yes"){
        $("#obiwan").click(function() {
            $("#defender").html(obiwan.html)
            obiwan.isDefender = "yes";
            defenderEmpty = "no";
        })
    }
    if (jarjarbinks.isSelectedChar === "no" && defenderEmpty === "yes"){
        $("#jarjar").click(function() {
            $("#defender").html(jarjarbinks.html)
            jarjarbinks.isDefender = "yes";
            defenderEmpty = "no";
        })
    }
    movement();
        
}
        





//This code checks which character the player has chosen and makes it so 
//the game ends once that character's health reaches 0
//then makes the attack button perform a function that checks which character 
//is the currently the defender, makes it so the hp of defender and player is 
//updated after each press, once the character reaches 0 hp or less it dies
//and the defender area is empty, and makes it so that once all enemies die
//the player sees they won and the button restarts the game
function movement() {

    if (obiwan.isSelectedChar === "yes") {
        if (obiwan.health <= 0) {
            gameOver();
        }

    $("#attack").click(function() {
        obiwan.damage * 2;
        if (darthmaul.isDefender = "yes") {
            obiwan.health = darthmaul.damage + obiwan.health;
            darthmaul.health = obiwan.damage + darthmaul.health;
            $("#obiwan-HP").text(obiwan.health);
            $("#darthmaul-HP").text(darthmaul.health);
            if (darthmaul.health <= 0) {
                darthmaul.isDefender = "no"
                $("#defender").text("");
                defenderEmpty = "yes";
                darthmaul.isAlive = "no"

            }
        }

        else if (darthsidious.isDefender = "yes") {
            obiwan.health = darthsidious.damage + obiwan.health;
            darthsidious.health = obiwan.damage + darthsidious.health;
            $("#obiwan-HP").text(obiwan.health);
            $("#darthsidious-HP").text(darthsidious.health);
            if (darthsidious.health <= 0) {
                darthsidious.isDefender = "no"
                $("#defender").text("");
                defenderEmpty = "yes";
                darthsidious.isAlive = "no"
            }
        }

        else if (lukeskywalker.isDefender = "yes") {
            obiwan.health = lukeskywalker.damage + obiwan.health;
            lukeskywalker.health = obiwan.damage + lukeskywalker.health;
            $("#obiwan-HP").text(obiwan.health);
            $("#lukeskywalker-HP").text(lukeskywalker.health);
            if (lukeskywalker.health <= 0) {
                lukeskywalker.isDefender = "no"
                $("#defender").text("");
                defenderEmpty = "yes";
                lukeskywalker.isAlive = "no"
            }
        }

        else if (jarjarbinks.isDefender = "yes") {
            obiwan.health = jarjarbinks.damage + obiwan.health;
            jarjarbinks.health = obiwan.damage + jarjarbinks.health;
            $("#obiwan-HP").text(obiwan.health);
            $("#jarjarbinks-HP").text(jarjarbinks.health);
            if (jarjarbinks.health <= 0) {
                jarjarbinks.isDefender = "no"
                $("#defender").text("");
                defenderEmpty = "yes";
                jarjarbinks.isAlive = "no"
            }
        }

        else if (defenderEmpty = "yes") {
            $("#info").html("<p>No enemy here</p>");
        }
    })
    
    if (darthmaul.isAlive = "no" && darthmaul.isAlive == jarjarbinks.isAlive == lukeskywalker.isAlive == darthsidious.isAlive ) {
        $("#info").html("<p>Winner winner chicken dinner!</p>")
        $("#button").text("Start Game");
        $("#button").click(startGame())
    
    }}

    else if (darthmaul.isSelectedChar === "yes") {
        if (darthmaul.health <= 0) {
            gameOver();
        }
        $("#attack").click(function() {
            darthmaul.damage * 2;
            if (obiwan.isDefender = "yes") {
                darthmaul.health = obiwan.damage + darthmaul.health;
                obiwan.health = darthmaul.damage + obiwan.health;
                $("#darthmaul-HP").text(darthmaul.health);
                $("#obiwan-HP").text(obiwan.health);
                if (darthmaul.health <= 0) {
                    darthmaul.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                }
            }
    
            else if (darthsidious.isDefender = "yes") {
                darthmaul.health = darthsidious.damage + darthmaul.health;
                darthsidious.health = darthmaul.damage + darthsidious.health;
                $("#darthmaul-HP").text(darthmaul.health);
                $("#darthsidious-HP").text(darthsidious.health);
                if (darthsidious.health <= 0) {
                    darthsidious.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                }
            }
    
            else if (lukeskywalker.isDefender = "yes") {
                darthmaul.health = lukeskywalker.damage + darthmaul.health;
                lukeskywalker.health = darthmaul.damage + lukeskywalker.health;
                $("#darthmaul-HP").text(darthmaul.health);
                $("#lukeskywalker-HP").text(lukeskywalker.health);
                if (darthmaul.health <= 0) {
                    darthmaul.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    lukeskywalker.isAlive = "no"
                }
            }
    
            else if (jarjarbinks.isDefender = "yes") {
                darthmaul.health = jarjarbinks.damage + darthmaul.health;
                jarjarbinks.health = darthmaul.damage + jarjarbinks.health;
                $("#darthmaul-HP").text(darthmaul.health);
                $("#jarjarbinks-HP").text(jarjarbinks.health);
                if (jarjarbinks.health <= 0) {
                    jarjarbinks.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    jarjarbinks.isAlive = "no"
                }
            }

            else if (defenderEmpty = "yes") {
                $("#info").html("<p>No enemy here</p>");
            }

        })

        if (jarjarbinks.isAlive = "no" && jarjarbinks.isAlive == obiwan.isAlive == lukeskywalker.isAlive == darthsidious.isAlive ) {
            $("#info").html("<p>Winner winner chicken dinner!</p>")
            $("#restart").append("<button type='button'>Restart</button>");
            $("#button").click(startGame())
    }


    else if (darthsidious.isSelectedChar === "yes") {
        if (darthsidious.health <= 0) {
            gameOver();
        }
        $("#attack").click(function() {
            darthsidious.damage * 2;
            if (darthmaul.isDefender = "yes") {
                darthsidious.health = darthmaul.damage + darthsidious.health;
                darthmaul.health = darthsidious.damage + darthmaul.health;
                $("#darthsidious-HP").text(darthsidious.health);
                $("#darthmaul-HP").text(darthmaul.health);
                if (darthmaul.health <= 0) {
                    darthmaul.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    darthmaul.isAlive = "no"
                }
            }
    
            else if (obiwan.isDefender = "yes") {
                darthsidious.health = obiwan.damage + darthsidious.health;
                obiwan.health = darthsidious.damage + obiwan.health;
                $("#darthsidious-HP").text(darthsidious.health);
                $("#obiwan-HP").text(obiwan.health);
                if (obiwan.health <= 0) {
                    obiwan.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    obiwan.isAlive = "no"
                }
            }   
    
            else if (lukeskywalker.isDefender = "yes") {
                darthsidious.health = lukeskywalker.damage + darthsidious.health;
                lukeskywalker.health = darthsidious.damage + lukeskywalker.health;
                $("#darthsidious-HP").text(darthsidious.health);
                $("#lukeskywalker-HP").text(lukeskywalker.health);
                if (lukeskywalker.health <= 0) {
                    lukeskywalker.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    lukeskywalker.isAlive = "no"
                }
            }
    
            else if (jarjarbinks.isDefender = "yes") {
                darthsidious.health = jarjarbinks.damage + darthsidious.health;
                jarjarbinks.health = darthsidious.damage + jarjarbinks.health;
                $("#darthsidious-HP").text(darthsidious.health);
                $("#jarajrbinks-HP").text(jarjarbinks.health);
                if (jarjarbinks.health <= 0) {
                    jarjarbinks.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    jarjarbinks.isAlive = "no"
                }
            }   
        })

        if (darthmaul.isAlive = "no" && darthmaul.isAlive == obiwan.isAlive == lukeskywalker.isAlive == jarjarbinks.isAlive ) {
            $("#info").html("<p>Winner winner chicken dinner!</p>")
            $("#button").text("Start Game");
            $("#button").click(startGame())
    }
}

    else if (lukeskywalker.isSelectedChar === "yes") {
        if (lukeskywalker.health <= 0) {
            gameOver();
        }
        $("#attack").click(function() {
            lukeskywalker.damage * 2;
            if (darthmaul.isDefender = "yes") {
                lukeskywalker.health = darthmaul.damage + lukeskywalker.health;
                darthmaul.health = lukeskywalker.damage + darthmaul.health;
                $("#lukeskywalker-HP").text();
                $("#darthmaul-HP").text();
                if (darthmaul.health <= 0) {
                    darthmaul.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                
                }
            }
    
            else if (darthsidious.isDefender = "yes") {
                lukeskywalker.health = darthsidious.damage + lukeskywalker.health;
                darthsidious.health = lukeskywalker.damage + darthsidious.health;
                $("#lukeskywalker-HP").text();
                $("#darthsidious-HP").text();
                if (darthsidious.health <= 0) {
                    darthsidious.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    darthsidious.isAlive = "no"
                } 
            }  
    
            else if (obiwan.isDefender = "yes") {
                lukeskywalker.health = obiwan.damage + lukeskywalker.health;
                obiwan.health = lukeskywalker.damage + obiwan.health;
                $("#lukeskywalker-HP").text();
                $("#obiwan-HP").text();
                if (obiwan.health <= 0) {
                    obiwan.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    obiwan.isAlive = "no"
                }
            }
    
            else if (jarjarbinks.isDefender = "yes") {
                lukeskywalker.health = jarjarbinks.damage + lukeskywalker.health;
                jarjarbinks.health = lukeskywalker.damage + jarjarbinks.health;
                $("#lukeskywalker-HP").text();
                $("#jarjarbinks-HP").text();
                if (jarjarbinks.health <= 0) {
                    jarjarbinks.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    jarjarbinks.isAlive = "no"
                }
            }
        })

        if (darthmaul.isAlive = "no" && darthmaul.isAlive == obiwan.isAlive == lukeskywalker.isAlive == darthsidious.isAlive ) {
            $("#info").html("<p>Winner winner chicken dinner!</p>")
            $("#button").text("Start Game");
            $("#button").click(startGame())
    }

    else if (jarjarbinks.isSelectedChar === "yes") {
        if (jarjarbinks.health <= 0) {
            gameOver();
        }
        $("#attack").click(function() {
            jarjarbinks.damage * 2;
            if (darthmaul.isDefender = "yes") {
                jarjarbinks.health = darthmaul.damage + jarjarbinks.health;
                darthmaul.health = jarjarbinks.damage + darthmaul.health;
                $("#jarjarbinks-HP").text(jarjarbinks.health);
                $("#darthmaul-HP").text(darthmaul.health);
                if (darthmaul.health <= 0) {
                    darthmaul.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    darthmaul.isAlive = "no"
                
                }
            }
    
            else if (darthsidious.isDefender = "yes") {
                jarjarbinks.health = darthsidious.damage + jarjarbinks.health;
                darthsidious.health = jarjarbinks.damage + darthsidious.health;
                $("#jarjarbinks-HP").text(jarjarbinks.health);
                $("#darthsidious-HP").text(darthsidious.health);
                if (darthsidious.health <= 0) {
                    darthsidious.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    darthsidious.isAlive = "no"
                }
            }
    
            else if (lukeskywalker.isDefender = "yes") {
                jarjarbinks.health = lukeskywalker.damage + jarjarbinks.health;
                lukeskywalker.health = jarjarbinks.damage + lukeskywalker.health;
                $("#jarjarbinks-HP").text(jarjarbinks.health);
                $("#lukeskywalker-HP").text(lukeskywalker.health);
                if (lukeskywalker.health <= 0) {
                    lukeskywalker.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    lukeskywalker.isAlive = "no"
                }
            }
    
            else if (obiwan.isDefender = "yes") {
                jarjarbinks.health = jarjarbinks.damage + jarjarbinks.health;
                obiwan.health = jarjarbinks.damage + obiwan.health;
                $("#jarjarbinks-HP").text(jarjarbinks.health);
                $("#obiwan-HP").text(obiwan.health);
                if (obiwan.health <= 0) {
                    obiwan.isDefender = "no"
                    $("#defender").text("");
                    defenderEmpty = "yes";
                    obiwan.isAlive = "no"
                }
            }
            
            else if (defenderEmpty = "yes") {
                $("#info").html("<p>No enemy here</p>");
            }

        })

        if (darthmaul.isAlive = "no" && darthmaul.isAlive == obiwan.isAlive == lukeskywalker.isAlive == darthsidious.isAlive ) {
            $("#info").html("<p>Winner winner chicken dinner!</p>")
            $("#button").text("Start Game");
            $("#button").click(startGame())
        }
    }
}
}
}



startGame();



