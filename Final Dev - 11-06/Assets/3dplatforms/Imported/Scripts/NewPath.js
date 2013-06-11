var scenesPrefab: Transform ;
var spawnPostion: Transform;
static var objdes : GameObject;

function OnTriggerEnter(thing:Collider)
{
	if(thing.gameObject.tag=="hero")
	{
		objdes = this.transform.parent.gameObject;
		Instantiate (scenesPrefab, spawnPostion.position, spawnPostion.rotation);
	}
}
