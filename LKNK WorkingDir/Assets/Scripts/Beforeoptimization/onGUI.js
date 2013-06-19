#pragma strict
var x : boolean = false;
var tex : Texture2D;
//var doneButton: Texture2D;
static var herowalkSpeed : float = 1f;
static var enemywalkSpeed : float = 1f;
var herorange : float = 2.0f;
var heroairange : float = 3.0f;
var enemyrange : float = 2.0f;
var test : GUISkin;
var gUIstyle : GUIStyle;
static var Bgmove : float = 0.2f;




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
		permvlues.Bgmove  = 0;
		permvlues.secHeroWalk = 0;
	}
	if(x)
		GUI.Window (0, Rect(Screen.width/8,Screen.height/8,Screen.width/1.2,Screen.height/1.1), DoMyWindow, "Settings");
}

   function DoMyWindow (windowID : int)
    {
	   	  GUI.skin = test;
	   	  
	   	  GUI.Label(Rect(30,100,200,76),"Hero walk speed",gUIstyle);
	      herowalkSpeed = GUI.HorizontalSlider (new Rect(30, 50, 200, 16), herowalkSpeed, 1.0f, 10.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(250, 50, 200, 16)," "+ Mathf.Round(herowalkSpeed* 100f)/100f ,gUIstyle);
	     
	      GUI.Label(Rect(360,100,230,76), "Enemy walk speed",gUIstyle);
	      enemywalkSpeed = GUI.HorizontalSlider (new Rect(360, 50, 230, 16), enemywalkSpeed, 1.0f, 10.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(610, 50, 230, 16)," "+ Mathf.Round(enemywalkSpeed * 100f)/100f ,gUIstyle);
	      
	      GUI.Label(Rect(30,200,200,216),"Hero range",gUIstyle);
	      herorange = GUI.HorizontalSlider (new Rect(30, 140, 200, 156), herorange, 1.0f, 4.0f, "Slider1", "Slider1Thumb");
	      GUI.Label(Rect(250, 140, 200, 156)," "+ Mathf.Round( herorange * 100f)/100f ,gUIstyle);
	      permvlues.heroRnge = herorange;
	      
	      GUI.Label(Rect(360,200,230,216),"Hero ai range",gUIstyle);
	      heroairange = GUI.HorizontalSlider (new Rect(360, 140, 230, 156), heroairange, 1.0f, 6.0f, "Slider1", "Slider1Thumb");
	      permvlues.secHeroRange = heroairange;
	      GUI.Label(Rect(610, 140, 230, 156), " "+Mathf.Round( heroairange * 100f)/100f ,gUIstyle);
	      
	      GUI.Label(Rect(30,330,200,376),"Enemy range",gUIstyle);
	      enemyrange = GUI.HorizontalSlider (new Rect(30, 270, 200, 316), enemyrange, 1.0f, 3.0f, "Slider1", "Slider1Thumb");
	      permvlues.enmyRnge = enemyrange;
	      GUI.Label(Rect(250, 270, 200, 316)," "+ Mathf.Round(enemyrange * 100f)/100f ,gUIstyle);
	      
	      //Debug.Log(hSliderValue);
	      //GUI.Label(Rect(360,330,230,376),"BG Speed", gUIstyle);
	     // Bgmove = GUI.HorizontalSlider (new Rect(360, 270, 230, 316), Bgmove , 0.2f, 2.0f, "Slider1", "Slider1Thumb");
	     // GUI.Label(Rect(610, 270, 230, 316)," "+ Mathf.Round(Bgmove *100f)/100f , gUIstyle);
	      
	      if(GUI.Button(Rect(250, 380, 260, 390),"Done", gUIstyle ))
	      {
		      	Time.timeScale = 1.0;
				x = false;
				permvlues.heroWalk = herowalkSpeed;
				permvlues.secHeroWalk = herowalkSpeed; 
				Debug.Log("Hero Walk Speed "+herowalkSpeed);
				permvlues.enemyWalk = enemywalkSpeed;
				Debug.Log("EnemyWalk Speed "+enemywalkSpeed);
				permvlues.Bgmove = Bgmove;
				Debug.Log("Sec Hero Speed "+Bgmove);
	      }
	     /* if(GUI.Button(Rect(460, 370, 500, 372), "Restart", gUIstyle ))
	      {
	     		Application.LoadLevel("HomeScreen");
	      }*/
	      
    }
    
