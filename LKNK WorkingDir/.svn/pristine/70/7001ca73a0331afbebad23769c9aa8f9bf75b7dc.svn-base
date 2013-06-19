#pragma strict
 var enemy: Animation;

function Start () 
{

}

function Update ()
 {
 	enemy = GameObject.Find("Enemy(Clone)").GetComponent(Animation);

	if(distancestp.distance < permvlues.enmyRnge)
	{
		enemy.CrossFade("Attack01");
	}
	else
	{
	enemy.CrossFade("Run");
	}

}