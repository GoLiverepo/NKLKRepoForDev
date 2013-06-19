import UnityEngine.Object;
import System.Collections;


class superClass
{
	static function walk(obj : GameObject,speed : float)
	{
		obj.transform.Translate(Vector3.forward * Time.deltaTime* speed);	
	}
	
	static function lookAt(obj : GameObject, targetobj : GameObject, rotationspeed : float)
	{
		var rotation = Quaternion.LookRotation(targetobj.transform.position - obj.transform.position);
		obj.transform.rotation = Quaternion.Slerp(obj.transform.rotation, rotation,rotationspeed);
	}
	
	static function fireAt(projectile : Rigidbody, obj : GameObject, firespeed : float)
	{
		var clone : Rigidbody = Instantiate(projectile, obj.transform.position, obj.transform.rotation);
		clone.velocity = obj.transform.forward * firespeed;
	}
}