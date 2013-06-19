#pragma strict

function Start () {

}

function Update () {
	//transform.Translate(Vector3.forward * Time.deltaTime* permvlues.secHeroWalk); // To make hero walk at speed defined in permvalues code.
	superClass.walk(this.gameObject,permvlues.secHeroWalk);
}