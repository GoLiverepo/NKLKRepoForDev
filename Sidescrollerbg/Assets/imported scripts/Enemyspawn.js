#pragma strict
var projectile : Rigidbody;
static var initenemy : int = 1;
private var ene = 1;
function Start () {

}

function Update () {
        if (initenemy == 1 && ene == 1) {
            var clone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
            initenemy =0;
            }
}

   /* function OnTriggerEnter (other : Collider) {
    	if(other.gameObject.tag == "Finish"){
               ene = 0;
        }
    }*/
