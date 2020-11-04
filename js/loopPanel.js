function preloadLoopPanel(){
	game.load.image('loopPanel','images/loopPanel/loopPanel.png');
	game.load.image('loopPanelExitBtn','images/loopPanel/exit.png');
	game.load.image('rythmBtnDisabled','images/loopPanel/rythmBtnDisabled.png');
	game.load.image('rythmBtnEnabled','images/loopPanel/rythmBtnEnabled.png');
	game.load.image('rythmBarDisabledLeft','images/loopPanel/rythmBarDisabledLeft.png');
	game.load.image('rythmBarDisabledMiddle','images/loopPanel/rythmBarDisabledMiddle.png');
	game.load.image('rythmBarDisabledRight','images/loopPanel/rythmBarDisabledRight.png');
	game.load.image('rythmBarEnabledMiddle','images/loopPanel/rythmBarEnabledMiddle.png');
	game.load.image('rythmBarEnabledLeft','images/loopPanel/rythmBarEnabledLeft.png');
	game.load.image('rythmBarEnabledRight','images/loopPanel/rythmBarEnabledRight.png');
}

function buildLoopPanel(){
	loopPanel = game.add.sprite(0, 0, 'loopPanel');
	loopPanelExitBtn = game.add.button(0,0, 'loopPanelExitBtn',onClickLoopPanelExit, this);
	setLoopPanelDimensions();
}

function setLoopPanelDimensions(){
	screenH = $(window).height();
	screenW = $(window).width();
	if(screenW>screenH){
		loopPanelW = screenW-screenW*0.5;
		loopPanelH = screenH-screenH*0.3;
	}
	else{
		loopPanelW = screenW-screenW*0.1;
		loopPanelH = screenH-screenH*0.5;
	}
	
	loopPanelX = game.world.centerX-(loopPanelW)/2;
	loopPanelY = game.world.centerY-(loopPanelH)/2;
	loopPanel.x = loopPanelX;
	loopPanel.y = loopPanelY;
	loopPanel.width = loopPanelW;
	loopPanel.height = loopPanelH;
	loopPanelExitBtnW= loopPanel.height/4;
	loopPanelExitBtnH= loopPanelExitBtnW/2;
	loopPanelExitBtn.x = loopPanelX+(loopPanelExitBtnW/4);
	loopPanelExitBtn.y = loopPanelY-(loopPanelExitBtnH/4);
	loopPanelExitBtn.width = loopPanelExitBtnW;
	loopPanelExitBtn.height = loopPanelExitBtnH;
}

function setRythmButtonsDimensions(){
	rows = 2;
	n = rythmButtons.length;
	marginX = loopPanel.width*0.04;
	marginY = loopPanel.height*0.16;
	RBMarginY =1.05;
	btnWidth = (loopPanel.width/(n/rows))-(50/(n/rows))-marginX;
	btnHeight = (loopPanel.height/rows) - (loopPanelExitBtn.height/rows)-(10/rows)-marginY;
	count =0;
	countBar=0;
	for(i=0;i<rows;i++){
		for(j=0;j<n/rows;j++){
			rythmButtons[count].x = loopPanel.x+j*btnWidth+(j*marginX)+20;
			rythmButtons[count].y = (loopPanel.y+i*btnHeight+loopPanelExitBtn.height)+i*marginY;
			rythmButtons[count].width = btnWidth;
			rythmButtons[count].height = btnHeight;
			
			
			if(rythmBar[count].leftBar){
				leftBarW = rythmBar[count].leftBar.width;
				rythmBar[count].leftBar.x = rythmButtons[count].x;
				rythmBar[count].leftBar.y = rythmButtons[count].y+rythmButtons[count].height*RBMarginY;
				rythmBar[count].leftBar.height = btnHeight/3;
			}
			rythmBar[count].x = rythmButtons[count].x+leftBarW;
			rythmBar[count].y = rythmButtons[count].y+rythmButtons[count].height*RBMarginY;
			rythmBar[count].width = btnWidth+marginX;
			rythmBar[count].height = btnHeight/3;
			if(rythmBar[count].rightBar){
				rightBarW = rythmBar[count].rightBar.width;
				rythmBar[count].rightBar.x = rythmBar[count].x+rythmBar[count].width;
				rythmBar[count].rightBar.y = rythmButtons[count].y+rythmButtons[count].height*RBMarginY;
				rythmBar[count].rightBar.height = btnHeight/3;
			}
			rythmButtons[count].x +=10;
			
			count++;
		}
	}
}

function addRythmButtons(n,sprite){
	rows = 2;
	if(!sprite.rythms){
		sprite.rythms = new Array();
		for(i=0;i<n;i++) sprite.rythms.push(false);
	}
	for(i=0;i<n;i++){
		if(sprite.rythms[i]==false) img = 'rythmBtnDisabled';
		else img = 'rythmBtnEnabled';
		btn = game.add.button(0,0,img,function(btn){onClickRythmBtn(btn,sprite)},this);
		btn.number = i;
		rythmButtons.push(btn);
		rythmBar.push(game.add.sprite(0,0,'rythmBarDisabledMiddle'));
		if(i==0) rythmBar[0].leftBar = game.add.sprite(0,0,'rythmBarDisabledLeft');
		else if(i==(n/rows)-1) rythmBar[(n/rows)-1].rightBar = game.add.sprite(0,0,'rythmBarDisabledRight');
		else if(i==(n/rows)) rythmBar[(n/rows)].leftBar = game.add.sprite(0,0,'rythmBarDisabledLeft');
		else if(i==n-1) rythmBar[n-1].rightBar = game.add.sprite(0,0,'rythmBarDisabledRight');
	}
	setRythmButtonsDimensions();
}
	
function onClickRythmBtn(btn,sprite){
	if(!sprite.rythms[btn.number]){
		sprite.rythms[btn.number]=true;
		btn.loadTexture("rythmBtnEnabled");
	}
	else{
		sprite.rythms[btn.number]=false;
		btn.loadTexture("rythmBtnDisabled");
	}
}
	

function onClickLoopPanelExit(){
	console.log("close loop panel");
	loopPanel.destroy();
	loopPanelExitBtn.destroy();
	enablePadsInput(true);
	for(i=0;i<rythmButtons.length;i++) rythmButtons[i].destroy();
	for(i=0;i<rythmBar.length;i++){ 
		if(rythmBar[i].leftBar) rythmBar[i].leftBar.destroy();
		if(rythmBar[i].rightBar) rythmBar[i].rightBar.destroy();
		rythmBar[i].destroy();
	}
	rythmButtons = new Array();
	rythmBar = new Array();
	padConfig=false;
	menuButtons["loopBtn"].loadTexture("loopBtn");
}
	