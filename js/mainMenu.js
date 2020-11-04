function preloadMainMenu(){
	game.load.image('loopBtn','images/mainMenu/loop.png');
	game.load.image('loopBtnPressed','images/mainMenu/loopPressed.png');
	game.load.image('pauseBtn','images/mainMenu/pause.png');
	game.load.image('pauseBtnPressed','images/mainMenu/pausePressed.png');
	/*game.load.image('playBtn','images/mainMenu/play.png');
	game.load.image('playBtnPressed','images/mainMenu/playPressed.png');*/
	game.load.image('cancelBtn','images/mainMenu/cancel.png');
	game.load.image('cancelBtnPressed','images/mainMenu/cancelPressed.png');
}



function setMainMenuButtonDimensions(menuButtons,btnWidth){
	initialX = game.world.centerX - menuButtons.length*btnWidth/2;
	for(i=0;i<menuButtons.length;i++){
		menuButtons[i].x = initialX+i*btnWidth;
		menuButtons[i].width = btnWidth;
		menuButtons[i].height = btnWidth;
	}
}

function getMainMenuHeight(){
	padsDimensions = getDimensions();
	if(padsDimensions.width>padsDimensions.height) menuH = padsDimensions.height;
	else menuH = padsDimensions.width;
	menuH*=0.5;
	//menuH = $(window).height()/8;
	return menuH;
}

function addMainMenuButtons(){
	game.input.onDown.add(unPause, self);
	
	menuButtons["loopBtn"] = menuButtons[0] =game.add.button(0, 0, 'loopBtn',onClickLoopBtn, this);
	menuButtons["pauseBtn"] = menuButtons[1] = game.add.button(0, 0, 'pauseBtn',onClickPauseBtn, this);
	menuButtons.push(game.add.button(0, 0, 'cancelBtn',onClickCancelBtn, this));
	setMainMenuButtonDimensions(menuButtons,menuH);
	
	menuButtons[2].onInputUp.add(onInputUpCancelBtn,this);
	menuButtons[2].onInputDown.add(onInputDownCancelBtn,this);
	
}


function onClickLoopBtn(btn){
	padConfig=true;
	btn.loadTexture("loopBtnPressed");
	console.log("onClickLoopBtn");
}

function onClickPauseBtn(btn){
	console.log(game.paused);
	if(!game.paused){ 
		btn.loadTexture("pauseBtnPressed");
		game.paused = true;
	}
	/*else{ 
		menuButtons.pauseBtn.loadTexture("pauseBtn");
		game.paused = true;
	}*/
}

function unPause(){
	menuButtons["pauseBtn"].loadTexture("pauseBtn");
	game.paused = false;
}

function onClickCancelBtn(btn){
	for(i=0;i<pads.length;i++) pads[i].rythms = null;
}

function onInputDownCancelBtn(btn){
	btn.loadTexture("cancelBtnPressed");
}

function onInputUpCancelBtn(btn){
	btn.loadTexture("cancelBtn");
}


