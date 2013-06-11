#pragma strict

 var secHero: Animation;

function Start () {

}

function Update () {
//secHero = GameObject.Find("secPlayer").GetComponent(Animation);

	if(distancestp.distance1 < permvlues.secHeroRange)
	{
		secHero.CrossFade("Attack01");
	}
	else
	{
	secHero.CrossFade("Run");
	}

}