#pragma strict
function Start () {

}

function Update () {
	//transform.Translate(Vector3.forward * Time.deltaTime* permvlues.heroWalk);
	superClass.walk(this.gameObject,permvlues.heroWalk);
}