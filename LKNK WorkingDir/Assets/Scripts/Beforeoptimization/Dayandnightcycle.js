#pragma strict
var presenttime : float = 7.5f;
var nexttime : float = 7.5f;
var x : int = 0;

/*var daymodeLayer3 : Texture2D;
var nitmodeLayer3 : Texture2D;
var daymodeLayer2 : Texture2D;
var nitmodeLayer2 : Texture2D;
var daymodeLayer1 : Texture2D;
var nitmodeLayer1 : Texture2D;
var daymodeLayer0 : Texture2D;
var nitmodeLayer0 : Texture2D;*/

function Start () {

}

function Update () {
	
	if(x == 0)
	{
		if(Time.timeSinceLevelLoad > presenttime)
		{
			presenttime += nexttime;
			light.intensity = 0.0;
			x =1;
			
		}
	}
	if(x == 1)
	{
		if(Time.timeSinceLevelLoad > presenttime)
		{
			presenttime += nexttime;
			light.intensity = 0.6;
			x =0;
		}
	}
}