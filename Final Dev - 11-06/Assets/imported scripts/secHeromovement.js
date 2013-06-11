#pragma strict
static var speed : float = 1;
function Start () {

}

function Update () {
//gameObject.Find("secPlayer").transform.Translate(Vector3.forward* permvlues.secHeroWalk);
//gameObject.Find("secPlayer(Clone)").transform.position.x += /*Time.smoothDeltaTime */ permvlues.secHeroWalk;
transform.Translate(Vector3.forward * Time.deltaTime* permvlues.secHeroWalk);
}