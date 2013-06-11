#pragma strict
 private var objpos : Vector3;
 private var obj : GameObject;
 static var x : int = 0;
function Start () {

}

function Update () {

	objpos = transform.position;
	if(gameObject.Find("Main Camera").transform.position.x < (objpos.x + 1300)){
			//Debug.Log("Fine");
		}
	else{
		Destroy(Layerspawn.objdes);
	}
}