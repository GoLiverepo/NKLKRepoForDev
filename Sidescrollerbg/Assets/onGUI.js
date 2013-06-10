#pragma strict
var x : boolean = false;
var tex : Texture2D;
static var herowalkSpeed : float = 1.0f;
static var enemywalkSpeed : float = 1.0f;
var herorange : float = 150.0f;
var heroairange : float = 120.0f;
var enemyrange : float = 150.0f;
var test : GUISkin;
var gUIstyle : GUIStyle;
static var secHeroWalk : float = 1.0f;
//var windowRect : Rect = Rect (500, 500, 500, 500);
function Start () {

}

function Update () {

}

function OnGUI()
{

	if(GUI.Button(Rect(Screen.width/2,0, 60, 60), tex))
	{
		Time.timeScale = 0.0;
		x = true;
		permvlues.heroWalk = 0;
		permvlues.enemyWalk = 0;
		permvlues.secHeroWalk  = 0;
	}
	if(x)
		GUI.Window (0, Rect(Screen.width/8,Screen.height/8,Screen.width/1.2,Screen.height/1.1), DoMyWindow, "My Window");
}

   function DoMyWindow (windowID : int)
    {
	   	  GUI.skin = test;
	   	  
	   	  GUI.Label(Rect(250,15,280,16),"Hero walk speed",gUIstyle);
	      herowalkSpeed = GUI.HorizontalSlider (new Rect(10, 10, 200, 16), herowalkSpeed, 1.0f, 5.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(500,15,510,16)," "+ herowalkSpeed ,gUIstyle);
	     
	      GUI.Label(Rect(250,75,280,76), "Enemy walk speed",gUIstyle);
	      enemywalkSpeed = GUI.HorizontalSlider (new Rect(10, 70, 200, 76), enemywalkSpeed, 1.0f, 5.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(500,75,510,76)," "+ enemywalkSpeed ,gUIstyle);
	      
	      GUI.Label(Rect(250,125,280,126),"Hero range",gUIstyle);
	      herorange = GUI.HorizontalSlider (new Rect(10, 130, 200, 126), herorange, 155.0f, 200.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(500,125,510,126)," "+ herorange ,gUIstyle);
	      permvlues.heroRnge = herorange;
	      
	      GUI.Label(Rect(250,175,280,176),"Hero ai range",gUIstyle);
	      heroairange = GUI.HorizontalSlider (new Rect(10, 190, 200, 176), heroairange, 155.0f, 200.0f, "Slider1", "Slider1Thumb");
	      permvlues.secHeroRange = heroairange;
	      GUI.Label(Rect(500,175,510,176), " "+heroairange ,gUIstyle);
	      
	      GUI.Label(Rect(250,225,280,226),"Enemy range",gUIstyle);
	      enemyrange = GUI.HorizontalSlider (new Rect(10, 250, 200, 226), enemyrange, 155.0f, 200.0f, "Slider1", "Slider1Thumb");
	      permvlues.enmyRnge = enemyrange;
	      GUI.Label(Rect(500,225,510,226)," "+ enemyrange ,gUIstyle);
	      
	      //Debug.Log(hSliderValue);
	      GUI.Label(Rect(250,275,280,276),"secHeroWalk", gUIstyle);
	      secHeroWalk = GUI.HorizontalSlider (new Rect(10, 310, 200, 276), secHeroWalk , 1.0f, 5.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(500,275,510,276)," "+ secHeroWalk , gUIstyle);
	      
	      if(GUI.Button(Rect(250, 370, 280, 372), "Done", gUIstyle ))
	      {
		      	Time.timeScale = 1.0;
				x = false;
				permvlues.heroWalk = herowalkSpeed; 
				Debug.Log("Hero Walk Speed "+herowalkSpeed);
				permvlues.enemyWalk = enemywalkSpeed;
				Debug.Log("EnemyWalk Speed "+enemywalkSpeed);
				permvlues.secHeroWalk = secHeroWalk;
				Debug.Log("Sec Hero Speed "+secHeroWalk);
	      }
	     /* if(GUI.Button(Rect(460, 370, 500, 372), "Restart", gUIstyle ))
	      {
	     		Application.LoadLevel("HomeScreen");
	      }*/
	      
    }
    
