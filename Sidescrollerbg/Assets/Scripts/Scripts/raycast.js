#pragma strict
static var attack : boolean = false;
static var distance : int = 200;

function Start () {

}

function Update () {
//distance = Vector2.Distance(gameObject.FindWithTag("hero").transform.position,gameObject.FindWithTag("enemy").transform.position);

	for (var i = 0; i < Input.touchCount; ++i) 
	    { 
	        var touch:Touch = Input.touches[i];
	        var ray:Ray = Camera.main.ScreenPointToRay(touch.position); 
	        var hit:RaycastHit = new RaycastHit();
	 
	        if(Physics.Raycast(ray,hit, 100000)) 
	        { 
	            /*if(hit.collider.tag == "destructable"){
	            attack = true;
	            //distance = val.dist(gameObject.FindWithTag("hero"),gameObject.FindWithTag("hit.collider.tag"));
	            }
	            
	            if(hit.collider.tag == "surprizedemons"){
	            attack = true;
	            //distance = val.dist(gameObject.FindWithTag("hero"),gameObject.FindWithTag("hit.collider.tag"));
	            }*/
	            
	            if(hit.collider.tag == "enemy"){
	            distancestp.herfire = 1;
	            }
	     	}
	    }
}