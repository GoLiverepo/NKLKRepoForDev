#pragma strict
var projectile : Rigidbody;
var fireRate : float = 0.5;
static var nextFire : float = 0.0;
private var speed : float = 0.1;
function Start () {

}

function Update () {
        if (distancestp.herfire == 1 && distancestp.distance < permvlues.heroRnge && Time.time > nextFire) {
        	nextFire = Time.time + fireRate;
        	distancestp.herfire = 0;
            var clone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
            clone.velocity = transform.right * permvlues.herobulletspeed;
        }
}

