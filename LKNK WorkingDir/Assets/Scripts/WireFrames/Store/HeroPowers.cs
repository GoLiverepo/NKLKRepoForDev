using UnityEngine;
using System.Collections;

public class HeroPowers: MonoBehaviour 
{
	
	public UILabel _Info;
	
	void OnClick()
	{
		_Info.text = "Congratulations !!! You just clicked on Hero Powers Button";
	}
}
