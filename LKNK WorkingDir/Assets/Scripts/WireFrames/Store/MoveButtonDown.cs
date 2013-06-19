using UnityEngine;
using System.Collections;

public class MoveButtonDown : MonoBehaviour 
{
 	public UIButton _Weapons;
	public UIButton _HeroPowers;
	public UIButton _HealingPortion;
	public UISprite _PopupSprite;
	
	private bool isClicked = false;
	
	
	
	void start()
	{
		//_Weapons = GameObject.Find("Weapons").GetComponent<UIButton>();
		//_HeroPowers = GameObject.Find("Hero Powers").GetComponent<UIButton>();
	}
	
	void OnClick()
	{
		isClicked = !isClicked;
		if(isClicked)
		{
			TweenPosition.Begin(_Weapons.gameObject, 0.1f, new Vector3(-410,-202,0));
			TweenPosition.Begin(_HeroPowers.gameObject, 0.1f, new Vector3(-410,-262,0));
			TweenPosition.Begin(_HealingPortion.gameObject, 0.1f, new Vector3(-410, -320, 0));
			TweenPosition.Begin(_PopupSprite.gameObject, 0.1f, new Vector3(-409, -47, 0));
		}
		if(!isClicked)
		{	
			TweenPosition.Begin(_PopupSprite.gameObject, 0.1f, new Vector3(-960, -47, 0));
			TweenPosition.Begin(_Weapons.gameObject, 0.1f, new Vector3(-410,35,0));
			TweenPosition.Begin(_HeroPowers.gameObject, 0.1f, new Vector3(-410,-30,0));
			TweenPosition.Begin(_HealingPortion.gameObject, 0.1f, new Vector3(-410, -95, 0));	
			//isClicked = false;
		}
		
	}
}
