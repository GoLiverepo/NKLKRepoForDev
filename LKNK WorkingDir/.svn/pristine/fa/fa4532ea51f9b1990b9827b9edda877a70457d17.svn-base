#pragma strict

// For Main Hero
var backgroundTexture : Texture;
var foregroundTexture : Texture;
var frameTexture : Texture;

var healthWidth: int = 199;
var healthHeight: int = 30;

var secHeroHealthWidth = 199; // for sec hero

var healthMarginLeft: int = 55;
var healthMarginTop: int = 88;

var secHeroHealthMarginLeft: int = 41; //for sec hero
var secHeroHealthMarginTop: int = 38; //for sec hero

var frameWidth : int = 266;
var frameHeight: int = 65;

var frameMarginLeft : int = 25;
var frameMarginTop: int = 43;

var secHeroFrameMarginLeft : int = 10; //for sec Hero
var secHeroFrameMarginTop: int = 10; //for sec Hero

var flag: boolean;
var secflag: boolean;

var deadhealth: int = -20;

function Start()
{
	flag=false;
	secflag=false;
}

function Update()
{
	if(healthWidth >= deadhealth && flag==false)
	{
		healthWidth--;
		if(healthWidth ==0)
			flag=true;
	}
	if(flag)
	{
		healthWidth++;
		if(healthWidth==200)
			flag=false;
	}
	if(secHeroHealthWidth >= deadhealth && secflag==false)
	{
		secHeroHealthWidth--;
		if(secHeroHealthWidth ==0)
			secflag=true;
	}
	if(secflag)
	{
		secHeroHealthWidth++;
		if(secHeroHealthWidth==200)
			secflag=false;
	}

}




//For Second Hero

function OnGUI () 
{
    //placement of health bar for Second Hero
    
     GUI.DrawTexture( Rect(secHeroFrameMarginLeft,secHeroFrameMarginTop, secHeroFrameMarginLeft + frameWidth, secHeroFrameMarginTop + frameHeight), backgroundTexture, ScaleMode.ScaleToFit, true, 0 );
    
    GUI.DrawTexture( Rect(secHeroHealthMarginLeft,secHeroHealthMarginTop,secHeroHealthWidth + secHeroHealthMarginLeft, healthHeight), foregroundTexture, ScaleMode.ScaleAndCrop, true, 0 );
    
    GUI.DrawTexture( Rect(secHeroFrameMarginLeft,secHeroFrameMarginTop, secHeroFrameMarginLeft + frameWidth,secHeroFrameMarginTop + frameHeight), frameTexture, ScaleMode.ScaleToFit, true, 0 );
    
    //placemet of heath bar for Hero
    GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth, frameMarginTop + frameHeight), backgroundTexture, ScaleMode.ScaleToFit, true, 0 );
    
    GUI.DrawTexture( Rect(healthMarginLeft,healthMarginTop,healthWidth + healthMarginLeft, healthHeight), foregroundTexture, ScaleMode.ScaleAndCrop, true, 0 );
    
    GUI.DrawTexture( Rect(frameMarginLeft,frameMarginTop, frameMarginLeft + frameWidth,frameMarginTop + frameHeight), frameTexture, ScaleMode.ScaleToFit, true, 0 );
    
}

