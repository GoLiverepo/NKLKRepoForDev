#pragma strict

var hero: Animation;
var secHero: Animation;
var enemy: Animation;

function Start () 
{
	hero.CrossFade("Run");
	secHero.CrossFade("Run");
	enemy.CrossFade("Run");
}

function Update () 
{
}