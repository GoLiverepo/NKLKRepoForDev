
function Start ()
{
	yield WaitForSeconds(3);
	Application.LoadLevel(2);
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
	    	if(hit.collider.tag == "BackDrop")
	     	{
	   			Application.LoadLevel(2);
	     	}
		}		
	}
}