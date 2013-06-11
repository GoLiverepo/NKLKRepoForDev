
function Update()
{
	LevelChange();
}


// this function detects the touch and loads the new level
function LevelChange()
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
	   			Application.LoadLevel("HomeScreen");
	     	}
		}		
	}
}