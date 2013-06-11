#pragma strict
var projectile : Rigidbody;
var fireRate : float = 2.5;

private var nextFire : float = 0.0;
private var speed : float = 0.1;



function Start () {

}

function Update () {
        if (distancestp.distance < permvlues.enmyRnge && Time.time > nextFire) 
        {
        	permvlues.enemyWalk = 0.0;
            nextFire = Time.time + fireRate;
            var clone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
            clone.velocity = transform.forward*70;
        }
}