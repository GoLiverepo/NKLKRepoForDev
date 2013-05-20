#pragma strict

function Start () {

}

function Update () {
var hewalk : functions;
hewalk = GameObject.Find("Uniscripts").GetComponent("functions");
	if(distancestp.distance < distancestp.Range)
		hewalk.anicont(16,16,11,2,4,18.0,GameObject.Find("Player"));
	else
	 hewalk.anicont(16,16,0,4,16,18.0,GameObject.Find("Player"));
}