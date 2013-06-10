#pragma strict
static var distance : float;
static var distance1 : float;
static var enmyfire : int;
static var herfire : int;
static var Range : int = 100;
static var secheroRange : int = 150; 
var Hero : Rigidbody;
var Enemy : Rigidbody;

function Start () 
{

}

function Update() 
{
	distance1 = Vector2.Distance(GameObject.Find("secPlayer").transform.position,GameObject.Find("Enemy(Clone)").transform.position);
	distance = Vector2.Distance(GameObject.Find("Player").transform.position,GameObject.Find("Enemy(Clone)").transform.position);
	Debug.Log("Distance:"+distance);
	Debug.Log("Distance1:"+distance1);
	if(distance < permvlues.heroRnge)
	{
		enmyfire = 1;
		permvlues.heroWalk = 0.0;
		//permvlues.enemyWalk = 0.0;
		Movement.layerspeed = 0.0;
		
		
		
		
		
		}
	if(distance1 < permvlues.secHeroRange){
		
		permvlues.secHeroWalk = 0.0;
	}
}