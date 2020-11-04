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
var preset
var menuButtons;
var padsDimensions;

$( window ).resize(function() {
	game.scale.setGameSize( $(window).width(), $(window).height());
	dim = getDimensions(pads.n,pads.m);
	console.log("resize:"+pads.length);
	setMainMenuButtonDimensions(menuButtons,getMainMenuHeight());
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
	game = new Phaser.Game($(window).width(),$(window).height(), Phaser.CANVAS, '', { preload: preload, create: create , update: gameLoop});
	
	function preload () {
		preloadPads();
		preloadMainMenu();
		preloadLoopPanel();
	}
	
    function create () {
		game.stage.backgroundColor = "black";
        addPads();
		addMainMenuButtons();
    }
	
	function gameLoop(){
		if(game.time.now>timer) playSounds();
	}
	
});