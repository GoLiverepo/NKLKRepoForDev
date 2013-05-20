 #pragma strict

private var hitHero:GameObject;

function Start () 
{
	hitHero = GameObject.FindGameObjectWithTag("hero");
}

function Update () 
{

}

function OnCollisonEnter(col : Collision){
	if(col.gameObject.tag == "hero")
	{
	   //attack = true;
	   Debug.Log("WATS THIS" + col.gameObject.tag);
	   //Destroy(col.gameObject);
	   //Destroy(this.gameObject);
	}
	
	
}