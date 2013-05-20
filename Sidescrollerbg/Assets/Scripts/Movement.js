#pragma strict
static var layerspeed : float = 0.2;
function Start () {

}

function Update () {
transform.Translate(Vector3.right * layerspeed);
}