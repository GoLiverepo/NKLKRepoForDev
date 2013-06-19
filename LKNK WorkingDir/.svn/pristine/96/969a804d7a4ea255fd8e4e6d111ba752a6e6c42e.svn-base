
static var liveHUD: boolean = false;

var hudWidth = 300;

static var lives: int = 2;

var myGUIStyle: GUIStyle;

function OnGUI()
{
	if(liveHUD)
	{
		GUILayout.BeginArea(Rect(Screen.width/2-100, Screen.height/2-100, 200,400));
			
			GUILayout.Button("Lifes Left", GUILayout.Height(50));
			
			GUILayout.Button(""+lives, GUILayout.Height(50));
			if(lives != 0){
			if(GUILayout.Button("Use Life", GUILayout.Height(50)))
			{
				lives--;
				permvlues.herlife = 0;
				permvlues.secherlife = 0;
				Enemyspawn.initenemy = 1;
				permvlues.heroWalk = onGUI.herowalkSpeed;
				liveHUD = false;
			}
			}
			if(GUILayout.Button("Exit", GUILayout.Height(50)))
			{
				Application.Quit();
			}
			
		
		GUILayout.EndArea();	
	}
}

