#pragma strict
static var speed : float = 1;
function Start () {

}

function Update () {
transform.Translate(Vector3.forward*speed);
}