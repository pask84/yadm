var pads;
var sounds = new Array();
var rythmButtons = new Array();
var rythmBar = new Array();
var loopPanel;
var loopPanelExitBtn;
var timer=0;
var curSound=0;
var padConfig=false;
var lpProportion = 2;
var game;
var preset;
var menuButtons;
var padsDimensions;
var loadingBar;
var loadingText;

$( window ).resize(function() {
    game.scale.setGameSize($(window).width(), $(window).height());
    dim = getDimensions(pads.n, pads.m);
    console.log("resize:" + pads.length);
    setMainMenuButtonDimensions(menuButtons, getMainMenuHeight());
    setPadDimensions();
    setLoopPanelDimensions();
    setRythmButtonsDimensions();
});

$( document ).ready(function() {
    pads = new Array();
    pads.n = 6;
    pads.m = 4;
    menuButtons = new Array();
    preset = getPreset("preset1");
    game = new Phaser.Game($(window).width(), $(window).height(), Phaser.CANVAS, '', { preload: preload, create: create, update: gameLoop });
    
    function preload () {
        // Create the loading bar
        loadingBar = game.add.graphics();
        loadingBar.lineStyle(3, 0xffffff, 1);
        loadingBar.moveTo(game.world.centerX - 150, game.world.centerY);
        loadingBar.lineTo(game.world.centerX + 150, game.world.centerY);
        loadingBar.scale.x = 0;

        // Add loading text
        loadingText = game.add.text(game.world.centerX, game.world.centerY - 50, 'Loading...', { font: '18px Arial', fill: '#ffffff' });
        loadingText.anchor.set(0.5);

        // Set up a callback for file progress
        game.load.onFileComplete.add(fileComplete, this);

        // Preload other assets
        preloadPads();
        preloadMainMenu();
        preloadLoopPanel();
    }
    
    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        // Update the loading bar scale based on progress
        loadingBar.scale.x = progress / 100;
    }

    function create () {
        game.stage.backgroundColor = "black";
        addPads();
        addMainMenuButtons();

        // Destroy the loading bar and text after loading is complete
        loadingBar.destroy();
        loadingText.destroy();
    }
    
    function gameLoop() {
        if (game.time.now > timer) playSounds();
    }
});