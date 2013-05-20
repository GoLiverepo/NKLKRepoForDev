#pragma strict
var projectile : Rigidbody;
var fireRate : float = 2.5;
private var nextFire : float = 0.0;
private var speed : float = 0.1;
function Start () {

}

function Update () {
        if (distancestp.enmyfire == 1 && Time.time > nextFire) {
            nextFire = Time.time + fireRate;
            var clone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
            clone.velocity = transform.forward*70;
            }
}