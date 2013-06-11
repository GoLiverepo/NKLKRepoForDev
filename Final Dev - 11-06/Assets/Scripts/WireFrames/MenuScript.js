var epicJourney: Texture;
var playMode: Texture;
var store: Texture;
var story: Texture;

var fBTexture: Texture;
var twitterTexture: Texture;
var tapJoyTexture: Texture;
var leaderShipBoard: Texture;

var myGUIStyle: GUIStyle;
var btnGUI: GUIStyle;

var btnWidth: int = 330;
var btnHeight:int = 40;
var btnSpacing:int = 5;

var btnSize: int = 80;

var clickSound: AudioClip;

function Start()
{

}

function OnGUI()
{
	GUILayout.BeginArea(Rect(Screen.width - (btnWidth + 50), Screen.height/4, btnWidth, 500));
	
		if(GUILayout.Button(epicJourney, myGUIStyle, GUILayout.Height(btnHeight)))
		{
			if(clickSound)
				audio.PlayOneShot(clickSound);
			Application.LoadLevel(3);
		}
		GUILayout.Space(btnSpacing);
		if(GUILayout.Button(playMode, myGUIStyle, GUILayout.Height(btnHeight)))
		{
			if(clickSound)
				audio.PlayOneShot(clickSound);
		}
		GUILayout.Space(btnSpacing);
		if(GUILayout.Button(store, myGUIStyle, GUILayout.Height(btnHeight)))
		{
			if(clickSound)
				audio.PlayOneShot(clickSound);
			Application.LoadLevel(9);

		}
		GUILayout.Space(btnSpacing);
		if(GUILayout.Button(story, myGUIStyle, GUILayout.Height(btnHeight)))
		{
			if(clickSound)
				audio.PlayOneShot(clickSound);
		
		}
	GUILayout.EndArea();
	
	if(GUI.Button(Rect(Screen.width - (Screen.width-100), Screen.height - 100, btnSize, btnSize), fBTexture, btnGUI ))
	{
		if(clickSound)
				audio.PlayOneShot(clickSound);
	}
	if(GUI.Button(Rect(Screen.width - (Screen.width-190), Screen.height - 100, btnSize, btnSize), twitterTexture, btnGUI ))
	{
		if(clickSound)
				audio.PlayOneShot(clickSound);
	}
	if(GUI.Button(Rect(Screen.width - (Screen.width-400), Screen.height - 100, btnSize, btnSize), tapJoyTexture, btnGUI ))
	{
		if(clickSound)
				audio.PlayOneShot(clickSound);
	}
	if(GUI.Button(Rect(Screen.width - (Screen.width-490), Screen.height - 100, btnSize, btnSize), leaderShipBoard, btnGUI ))
	{
		if(clickSound)
				audio.PlayOneShot(clickSound);
	}
	
	
	
}
