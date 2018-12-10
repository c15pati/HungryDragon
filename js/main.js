var game;
var score;
var soundOn=true;
var useLandscape=true;

window.onload = function () {

var isMobile=navigator.userAgent.indexOf("Mobile");
if (isMobile>-1)
     {
        isMobile=true;
     }
     else
     {
        isMobile=false;
     }

    if (isMobile==false) {
        //desktop laptop
        if (useLandscape == true) {
            game = new Phaser.Game(640, 480, Phaser.AUTO, "ph_game");
        } else {

            game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
        }

    } else {
        //mobile device
        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
    }
    //add a state or screen to the game
    game.state.add("stateMain", stateMain);
    game.state.add("stateOver", stateOver);
    game.state.add("stateTitle", stateTitle);
    game.state.start("stateMain");
}