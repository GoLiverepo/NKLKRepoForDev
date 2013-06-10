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
	//heroAni.hero.CrossFade("Dead");
	distancestp.enmyfire = 0;
	Destroy(collision.gameObject /*,heroAni.hero.clip.length*/);
	Destroy(this.gameObject);
	}
	
	if(collision.gameObject.tag == "floor"){
	Destroy(this.gameObject);
	}
}