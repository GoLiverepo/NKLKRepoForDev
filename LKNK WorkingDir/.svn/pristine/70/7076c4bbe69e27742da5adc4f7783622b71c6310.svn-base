#pragma strict
var prefab : Transform[] = new Transform[5];
var post : Transform ;
static var objdes : GameObject;
static var i : int =0;
function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "hero"){
		savepointfire.visible = 1;		
		i=Random.Range(0,prefab.length);
		objdes = this.transform.parent.gameObject;
		
		post.position.x = transform.position.x+30;
		
		Instantiate (prefab[i], post.position, post.rotation);
		
		}
	
}