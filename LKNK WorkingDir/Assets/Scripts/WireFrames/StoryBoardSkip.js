function OnGUI()
{
	if(GUI.Button(Rect(Screen.width/2 - 20 , Screen.height - 100,60,40), "Skip"))
	{
		Application.LoadLevel(Application.loadedLevel+1);
	}
}