#pragma strict
var prefab : Transform;
var post : Transform;
static var objdes : GameObject;
function Start () {

}

function Update () {

	
}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "hero"){
		objdes = this.transform.parent.gameObject;
		//visibility.x =1;
		//Debug.Log("Obj :" +this.transform.parent.gameObject);
		
//		post.position = transform.position;
//		post.rotation = transform.rotation;
		
		post.position.x = transform.position.x + 1998;
		Instantiate (prefab, post.position, post.rotation);
	}
	
}