function preloadPads(){
	for(i=0;i<PresetsImages.length;i++){
		game.load.image(PresetsImages[i], 'images/pads/'+PresetsImages[i]+'.png');
		game.load.image(PresetsImages[i]+"Play", 'images/pads/'+PresetsImages[i]+'Play.png');
	}
	for(i=0;i<PresetsSounds.length;i++){
		game.load.audio(PresetsSounds[i], 'sounds/'+PresetsSounds[i]);
		sounds[PresetsSounds[i]]=game.add.audio(PresetsSounds[i]);
	}	
}


function setPadDimensions(){
		dim = getDimensions();
		margin = dim.width*0.07;
		count =0;
		dim.height -= getMainMenuHeight()/dim.rows;
		for(i=0;i<dim.rows;i++){
			for(j=0;j<dim.columns;j++){
				pads[count].x = j*dim.width+margin/2;
				pads[count].y = i*dim.height+getMainMenuHeight();
				pads[count].height = dim.height-margin;
				pads[count].width = dim.width-margin;
				count++;
			}
		}
		
}

//gets the 2 dimensions and decides which one to put on the rows and which one to put on the columns depending on the screen size
function addPads(){
	for(i=0;i<pads.n*pads.m;i++){
		pad = game.add.sprite(0, 0, preset[i].color);
		pad.inputEnabled = true;
		pad.sound = preset[i].sound;
		pad.color = preset[i].color;
		pad.events.onInputDown.add(onInputDownPad, this);
		pad.events.onInputUp.add(onInputUpPad, this);
		pads.push(pad);
	}
	setPadDimensions();
}
	
function onInputDownPad(sprite){
	if(!padConfig){ 
		sounds[sprite.sound].play();
		sprite.loadTexture(sprite.color+"Play");
	}
	else{
		console.log("padConfig");
		enablePadsInput(false);
		buildLoopPanel();
		addRythmButtons(16,sprite);
	}
}

function onInputUpPad(sprite){
	sprite.loadTexture(sprite.color);
}
	

function enablePadsInput(enable){
	for(i=0;i<pads.length;i++) pads[i].inputEnabled = enable;
}

/*n>=m*/
function getDimensions(){
	n = pads.n;
	m = pads.m;
	wndH= $(window).height();
	wndW= $(window).width();
	if(wndW>wndH){
		padWidth=wndW/n;
		padHeight=wndH/m;
		columns = n;
		rows = m;
	}
	else{
		padWidth=wndW/m;
		padHeight=wndH/n;
		columns = m;
		rows = n;
	}
		
	return {"width":padWidth,"height":padHeight,"columns":columns,"rows":rows};
}
	
	
function playSounds(){
	if(rythmBar.length>0){ 
		curBit = curSound%rythmBar.length;
		for(i=0;i<curBit;i++){ 
			rythmBar[i].loadTexture('rythmBarEnabledMiddle');
			if(rythmBar[i].leftBar) rythmBar[i].leftBar.loadTexture('rythmBarEnabledLeft');
			if(rythmBar[i].rightBar) rythmBar[i].rightBar.loadTexture('rythmBarEnabledRight');
		}
		rythmBar[curBit].loadTexture('rythmBarEnabledMiddle');
		if(rythmBar[curBit].leftBar) rythmBar[curBit].leftBar.loadTexture('rythmBarEnabledLeft');
		if(rythmBar[curBit].rightBar) rythmBar[curBit].rightBar.loadTexture('rythmBarEnabledRight');
		if(curBit==0){
			for(i=0;i<rythmBar.length;i++){ 
				if(rythmBar[i].leftBar) rythmBar[i].leftBar.loadTexture('rythmBarDisabledLeft');
				if(rythmBar[i].rightBar) rythmBar[i].rightBar.loadTexture('rythmBarDisabledRight');
				rythmBar[i].loadTexture('rythmBarDisabledMiddle');
			}
		}
	}
	for(i=0;i<pads.length;i++){
		if(pads[i].rythms){
			curRythm = curSound%pads[i].rythms.length;
			if(pads[i].rythms[curRythm]){
				pads[i].loadTexture(pads[i].color+"Play");
				sounds[pads[i].sound].play();
				console.log("play:"+pads[i].sound+" pad:"+i);
			}
			else{
				pads[i].loadTexture(pads[i].color);
			}
		}
	}
	curSound++;
	timer = game.time.now+200;
}
