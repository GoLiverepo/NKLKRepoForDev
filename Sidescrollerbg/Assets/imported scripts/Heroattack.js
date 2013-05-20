function Start(){

 }

function Update () { 

 
 for (var i = 0; i < Input.touchCount; ++i) 
    { 
        var touch:Touch = Input.touches[i];
        var ray:Ray = Camera.main.ScreenPointToRay(touch.position); 
        var hit:RaycastHit = new RaycastHit(); 
 
        if(Physics.Raycast(ray,hit, 1000000)) 
        { 
            if(hit.collider.tag == "enemy") 
            {
              distancestp.herfire = 1;
        }   
     }
    }
    
}  