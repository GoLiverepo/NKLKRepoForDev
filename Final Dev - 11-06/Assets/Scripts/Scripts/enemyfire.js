#pragma strict
private var distance : int;
var fireRate : float = 25;
var gobj : Rigidbody;
private var nextFire : float = 0.0;
private var frc : int =900;

private	var bulletReady:boolean = false;

function Start () 
{

}

function Update () 
{
distance = Vector2.Distance(GameObject.FindWithTag("enemy").transform.position,GameObject.FindWithTag("hero").transform.position);

	if(distance < permvlues.enmyRnge)
	{
		Enemymovement1.walkspeed = 0.0;
		Heromovement1.walkspeed = 0.0;
	}
	Debug.Log("distance" + distance);
	//Debug.Log("nextFire" + nextFire);
	if(distance < permvlues.enmyRnge && Time.time > nextFire)
	{
		nextFire = Time.deltaTime + fireRate;
		var clne : Rigidbody = Instantiate(gobj, transform.position, transform.rotation);
		clne.velocity = transform.forward * 0.1;
	}
}


// set a flag to be false( ex.bulletReady)
// take the time.deltatime and previous time..
// differentiate the times. and add the diff to the current time.
// set the bulletReady TRUE
// check condition for the time && bulletReady
// fire the bullet.
