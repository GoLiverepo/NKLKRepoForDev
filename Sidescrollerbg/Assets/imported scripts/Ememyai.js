#pragma strict
//var target : Transform;
var projectile : Rigidbody;
var damping = 60.0;
var fireRate : float = 5.0;
static var nextFire : float = 0.0;
var speed : float =2.0;
var firespeed : int = 100;
function Start () {

}

function Update () {

if(distancestp.distance1 < distancestp.secheroRange){
lookAt();
attack();
}
}
function lookAt ()
{
var rotation = Quaternion.LookRotation(GameObject.Find("Enemy(Clone)").transform.position - transform.position);
transform.rotation = Quaternion.Slerp(transform.rotation, rotation,/* Time.deltaTime */ damping);
}
 
function attack ()
{
if(Time.time > nextFire){
nextFire = Time.time + fireRate;
var clone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
clone.velocity = transform.forward * firespeed;
}
}