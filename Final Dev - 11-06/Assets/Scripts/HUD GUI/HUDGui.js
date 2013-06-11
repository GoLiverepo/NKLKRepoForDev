
var specialPower1: Texture;
var specialPower2: Texture;

var healingPortion: Texture;
var weapon: Texture;

var BtnSize: int = 70;

var BtnGUI: GUIStyle;

var clickSound: AudioClip;


function OnGUI()
{
	if(GUI.Button(Rect(Screen.width - 180, Screen.height - 80, BtnSize,BtnSize), specialPower1, BtnGUI))
	{
		if(clickSound)
			audio.PlayOneShot(clickSound);
		
	}
	if(GUI.Button(Rect(Screen.width - 100, Screen.height - 80, BtnSize,BtnSize), specialPower2, BtnGUI))
	{
		if(clickSound)
			audio.PlayOneShot(clickSound);
	
	}
	if(GUI.Button(Rect(Screen.width - (Screen.width - 100), Screen.height - 80, BtnSize,BtnSize), specialPower2, BtnGUI))
	{
		if(clickSound)
			audio.PlayOneShot(clickSound);
	
	}
	if(GUI.Button(Rect(Screen.width - (Screen.width - 30), Screen.height - 80, BtnSize,BtnSize), specialPower2, BtnGUI))
	{
		if(clickSound)
			audio.PlayOneShot(clickSound);
	}
	
	
}