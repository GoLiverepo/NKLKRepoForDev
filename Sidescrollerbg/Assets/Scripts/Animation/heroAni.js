#pragma strict

  var hero: Animation;

function Start () {

}

function Update () {
	//hero = GameObject.Find("Player").GetComponent(Animation);

	if(distancestp.distance < permvlues.heroRnge)
	{
		hero.CrossFade("Attack01");
	}
	else
	{
	hero.CrossFade("Run");
	}

}