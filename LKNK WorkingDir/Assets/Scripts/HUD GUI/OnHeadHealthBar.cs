using UnityEngine;
using System.Collections;

public class HealthBar : MonoBehaviour {

	float x = 0;
	int health;
	bool flag = false;
	// Use this for initialization
	void Start () 
	{
		
	}
	
	// Update is called once per frame
	void Update () 
	{	
		if(x<0)
				flag= false;
		if(x>1)
				flag= true;

		if(x>0 && flag)
		{
			x-=0.01f;
		}
		if(x<1 && !flag)
		{
			x+=0.01f;
		}
		transform.localScale = new Vector3(x, transform.localScale.y, transform.localScale.z);
	}
}
