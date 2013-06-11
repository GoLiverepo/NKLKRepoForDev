#pragma strict

function Start () {

}

function Update () {
var hewalk : functions;
hewalk = GameObject.Find("Uniscripts").GetComponent("functions");
	if(distancestp.distance < permvlues.secHeroRange)
		hewalk.anicont(16,16,11,2,4,18.0,GameObject.Find("secPlayer(Clone)"));
	else
	 hewalk.anicont(16,16,0,4,16,18.0,GameObject.Find("secPlayer(Clone)"));
}