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
	Destroy(gameObject.Find("secPlayer(Clone)"));
	Destroy(gameObject.Find("Enemy(Clone)"));
	Destroy(this.gameObject);
	OnDead.liveHUD = true;
	
	}
	
	if(collision.gameObject.tag == "floor"){
	Destroy(this.gameObject);
	}
}