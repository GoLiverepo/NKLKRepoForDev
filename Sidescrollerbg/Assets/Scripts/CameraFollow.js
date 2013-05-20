	 var target : Transform;
	
    private var Speed :  float = 100;


function Update () {
	var newPos : Vector3 = target.position + new Vector3(85, 50, -306);
        transform.position = Vector3.Lerp(transform.position, newPos, Time.deltaTime*Speed);
}