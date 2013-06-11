	 var target : Transform;
	
    private var Speed :  float = 100;


function Update () {
	target = GameObject.Find("Player(Clone)").GetComponent("Transform");
	var newPos : Vector3 = target.position + new Vector3(85, 11, -306);
        transform.position = Vector3.Lerp(transform.position, newPos, Time.deltaTime*Speed);
}