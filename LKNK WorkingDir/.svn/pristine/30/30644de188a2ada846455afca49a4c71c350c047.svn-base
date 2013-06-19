var clickSound: AudioClip;

function Update()
{
   // var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    //var hit : RaycastHit;
    for (var i = 0; i < Input.touchCount; ++i) 
	{ 
   		var touch:Touch = Input.touches[i];
    	var ray:Ray = Camera.main.ScreenPointToRay(touch.position); 
    	var hit:RaycastHit = new RaycastHit();
	    if (collider.Raycast (ray, hit, 100.0)) 
	    {
        	if(hit.collider.tag == "enemy")
        	{
            	//Debug.Log("HIT done");
        		if(clickSound)
              		AudioSource.PlayClipAtPoint( clickSound, transform.position );
            	distancestp.herfire = 1;
    		}
   		}
	}
}