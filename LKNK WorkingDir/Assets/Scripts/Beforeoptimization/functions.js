#pragma strict

function Start () {

}

function Update () {

}
function lookAt (targetobj : GameObject)
{
var damping = 6.0;
var rotation = Quaternion.LookRotation(targetobj.transform.position - transform.position);
transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}
 
function attack (projectile : Rigidbody)
{
var clone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
}

function fireing(bullet : GameObject, force : float){
var prj : Rigidbody = bullet.AddComponent(Rigidbody);
//prj.mass = 10;
var clne : Rigidbody = Instantiate(prj, transform.position, transform.rotation);
clne.velocity = transform.right * force;
}

function anicont (uvAnimationTileX: int,uvAnimationTileY: int,colFrameStart: int, rowFrameStart: int,totalFrames : int,framesPerSecond: float, gmeobj : GameObject) {
 
	// Calculate index
	var index : int = Time.time * framesPerSecond;
	// repeat when exhausting all frames
	index = index % totalFrames;//(uvAnimationTileX * uvAnimationTileY);
 
	// Size of every tile
	var size = Vector2 (1.0 / uvAnimationTileX, 1.0 / uvAnimationTileY);
 
	// split into horizontal and vertical index
	var uIndex = index % uvAnimationTileX;
	var vIndex = index / uvAnimationTileX;
 
	// build offset
	// v coordinate is the bottom of the image in opengl so we need to invert.
	var offset = Vector2 ((uIndex+colFrameStart) * size.x, 1.0 - size.y - (vIndex+rowFrameStart) * size.y);
 
	gmeobj.renderer.material.SetTextureOffset ("_MainTex", offset);
	gmeobj.renderer.material.SetTextureScale ("_MainTex", size);
}