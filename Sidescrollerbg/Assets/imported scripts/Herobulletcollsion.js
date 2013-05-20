#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision){
	if(collision.gameObject.tag == "enemybullet")
	{
	Destroy(collision.gameObject);
	}
	if(collision.gameObject.tag == "enemy"){
	Destroy(collision.gameObject);
	Destroy(this.gameObject);
	distancestp.enmyfire = 0;
	Enemyspawn.initenemy = 1;
	Enemymovement.speed = 1;
	Heromovement.speed = 1;
	secHeromovement.speed = 1;
	Movement.layerspeed = 0.2;
	}
	
	if(collision.gameObject.tag == "floor"){
	Destroy(this.gameObject);
	}
}