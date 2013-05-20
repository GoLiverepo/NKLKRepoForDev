#pragma strict
var gobj : Rigidbody;
function Start () {

}

function Update () {

	var clne : Rigidbody = Instantiate(gobj, transform.position, transform.rotation);
	clne.velocity = transform.right * 100;
	
}