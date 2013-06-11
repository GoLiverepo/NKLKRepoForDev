#pragma strict
var prefab : Transform[] = new Transform[5];
//var x : Array;
var post : Transform ;
static var objdes : GameObject;
static var i : int =0;
function Start () {

}

function Update () {
	/*if(i<prefab.length){
		i=0;
	}*/
}

function OnTriggerEnter(col : Collider){

	if(col.gameObject.tag == "hero"){
		//i++;
		i=Random.Range(0,prefab.length);
		objdes = this.transform.parent.gameObject;
		//post = this.transform.parent.gameObject.transform.Find("position");
		post.position.x = transform.position.x+1000;
		//Debug.Log(this.transform.parent.position);
		Instantiate (prefab[i], post.position, post.rotation);
		
		//visibility.x =1;
		//Debug.Log("Obj :" +this.transform.parent.gameObject);
		
//		post.position = transform.position;
//		post.rotation = transform.rotation;
		
		
		}
	
}