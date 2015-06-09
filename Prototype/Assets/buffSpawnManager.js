#pragma strict

var buff: GameObject;
var player: GameObject;

var timeSinceLast: float;
var timeBetween: float;

function Start () {
	timeSinceLast = 0;
	timeBetween = Random.Range(1, 25);
}

function Update () {
	timeSinceLast += Time.deltaTime;
	
	if (timeSinceLast >= timeBetween) {
		var pos = Vector3(Random.Range (-4, 4), .6, player.transform.position.z + 30);
		Instantiate(buff, pos, Quaternion.identity);
		timeSinceLast = 0;
		timeBetween = Random.Range(1, 25);
	}
}