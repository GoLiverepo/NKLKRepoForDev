#pragma strict
static var speed : float = 1;
function Start () {

}

function Update () {
	
//transform.Translate(Vector3.right* permvlues.enemyWalk );
	/*gameObject.Find("Enemy(Clone)")*///this.gameObject.transform.position.x -= /*Time.smoothDeltaTime */ permvlues.enemyWalk;
	transform.Translate(Vector3.forward * Time.deltaTime* permvlues.enemyWalk);

}