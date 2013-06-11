#pragma strict
var gobj : Rigidbody;
static var force : float = 1.0;
function Start () {

}

function Update () {
if(raycast.distance < permvlues.heroRnge){
	Heromovement1.walkspeed = 0.0;
}
if(raycast.attack && raycast.distance < permvlues.heroRnge){
	raycast.attack = false;
	var clne : Rigidbody = Instantiate(gobj, transform.position, transform.rotation);
	clne.velocity = transform.right * force;
}
}