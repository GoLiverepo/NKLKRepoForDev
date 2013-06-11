#pragma strict
var projectile : GameObject;
static var x : boolean = true;
function Start () {

}

function Update () {
	if(x){
	var clone : GameObject = Instantiate(projectile, transform.position, transform.rotation);
	x=false;
	}
	
}