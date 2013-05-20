#pragma strict

function Start () {

}

function Update () {
var hewalk : functions;
hewalk = GameObject.Find("Uniscripts").GetComponent("functions");
	if(distancestp.distance < distancestp.Range)
		hewalk.anicont(16,16,11,3,4,18.0,GameObject.Find("Enemy(Clone)"));
	else
		hewalk.anicont(16,16,0,5,16,18.0,GameObject.Find("Enemy(Clone)"));
}