#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision){
	if(collision.gameObject.tag == "herobullet")
	{
	Destroy(collision.gameObject);
	}
	if(collision.gameObject.tag == "hero")
	{
	distancestp.enmyfire = 0;
	Destroy(collision.gameObject);
	Destroy(this.gameObject);
	}
	
	if(collision.gameObject.tag == "floor"){
	Destroy(this.gameObject);
	}
}