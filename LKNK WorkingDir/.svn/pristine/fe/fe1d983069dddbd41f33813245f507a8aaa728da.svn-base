#pragma strict
static var distance : float;
static var distance1 : float;
static var enmyfire : int;
static var herfire : int;
static var Range : int = 100;
static var secheroRange : int = 150; 

var enemysprites : Texture2D[];
var herosprites : Texture2D[];
var secherosprites : Texture2D[];
function Start () 
{

}

function Update() 
{
	distance1 = Vector2.Distance(GameObject.Find("secPlayer(Clone)").transform.position,GameObject.Find("Enemy(Clone)").transform.position);
	distance = Vector3.Distance(GameObject.Find("Player(Clone)").transform.position,GameObject.Find("Enemy(Clone)").transform.position);
//	Debug.Log("Distance:"+distance);
//	Debug.Log("Distance1:"+distance1);
	if(distance < permvlues.heroRnge)
	{
		enmyfire = 1;
		permvlues.heroWalk = 0.0;
		//permvlues.enemyWalk = 0.0;
		//Movement.layerspeed = 0.0;
		
		
		
		
		
		}
	if(distance1 < permvlues.secHeroRange){
		
		permvlues.secHeroWalk = 0.0;
	}
	if(distance < permvlues.enmyRnge){
		gameObject.Find("Enemy(Clone)").renderer.material.mainTexture = enemysprites[1];
	}
	else
	{
		gameObject.Find("Enemy(Clone)").renderer.material.mainTexture = enemysprites[0];
	}
	if(distance < permvlues.heroRnge){
		gameObject.Find("Player(Clone)").renderer.material.mainTexture = herosprites[1];
	}
	else{
		gameObject.Find("Player(Clone)").renderer.material.mainTexture = herosprites[0];
	}
	if(distance < permvlues.secHeroRange){
		gameObject.Find("secPlayer(Clone)").renderer.material.mainTexture = secherosprites[1];
	}
	else{
		gameObject.Find("secPlayer(Clone)").renderer.material.mainTexture = secherosprites[0];
	}
}