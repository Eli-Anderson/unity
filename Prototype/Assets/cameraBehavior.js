#pragma strict

var player: GameObject;

function Start () {

}

function Update () {
	gameObject.transform.position.z = player.transform.position.z - 10;
}