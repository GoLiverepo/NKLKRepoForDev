#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "hero"){
		Destroy(this.gameObject);
		savepointfire.visible = 0;
		permvlues.saved = PathSpawnFinal.i;
	}
}