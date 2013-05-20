#pragma strict
static var walkspeed : float = 0.8;
function Start () {

}

function Update () {
transform.Translate(Vector3.forward * walkspeed);
}