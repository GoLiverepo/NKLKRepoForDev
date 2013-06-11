#pragma strict

function Start () 
{
	renderer.material.color = Color.black;
}

function Update () 
{
	for (var i = 0; i < Input.touchCount; ++i) 
	{ 
	   	var touch:Touch = Input.touches[i];
	    var ray:Ray = Camera.main.ScreenPointToRay(touch.position); 
	    var hit:RaycastHit = new RaycastHit();
	    if(Physics.Raycast(ray,hit, 100000)) 
		{ 
	    	if(hit.collider.tag == "Play")
	     	{
	     		renderer.material.color = Color.red;
	   			Application.LoadLevel("bg1");
	     	}
		}		
	}

}