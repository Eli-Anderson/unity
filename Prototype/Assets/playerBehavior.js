#pragma strict
var speed: int;
function Start () {
	speed = 40;
}

function Update () {
	gameObject.rigidbody.AddForce(Vector3(20*Input.GetAxis("Horizontal"), 0, speed));
	
	if (transform.position.y < 0) {
		Application.LoadLevel("main");
	}
}