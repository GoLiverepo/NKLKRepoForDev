#pragma strict

function Start () {

}

function Update () {

}

function OnCollisonEnter(col : Collision){
	/*if(col.gameObject.tag == "destructable"){
	     //attack = true;
	     Destroy(col.gameObject);
	     Destroy(this.gameObject);
	}
	
	if(col.gameObject.tag == "surprizedemons"){
	    //attack = true;
	    Destroy(col.gameObject);
	    Destroy(this.gameObject);
	}*/
	            
	if(col.gameObject.tag == "enemy"){
	   //attack = true;
	   Destroy(col.gameObject);
	   Destroy(this.gameObject);
	   enemyspawn.x= true;
	   Heromovement1.walkspeed = 0.8;
	}
}