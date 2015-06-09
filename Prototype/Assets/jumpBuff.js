#pragma strict

var jumpHeight: float;
var jumpForce: float;
//var player: GameObject;

function Start () {
	jumpHeight = 1500;
	jumpForce = 2000;
	//player = GameObject.Find("Player");
}

function Update () {

}

function OnTriggerEnter (coll: Collider) {
	GameObject.Find("Player").rigidbody.AddForce(Vector3(0, jumpHeight, jumpForce));
	Destroy(gameObject);
}