#pragma strict
static var speed : float = 1;
function Start () {

}

function Update () {
gameObject.Find("Player").transform.Translate(Vector3.forward * permvlues.heroWalk);
}