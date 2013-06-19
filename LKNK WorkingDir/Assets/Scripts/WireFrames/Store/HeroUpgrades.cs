using UnityEngine;
using System.Collections;

public class HeroUpgrades : MonoBehaviour {

	public UILabel _Info;
	
	void OnClick()
	{
		_Info.text = "Congratulations !!! You just clicked on Hero Upgrades Button";
	}
}
