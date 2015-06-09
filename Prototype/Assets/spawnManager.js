#pragma strict
var obstacle: GameObject;
var player: GameObject;

var timeSinceLast: float;
var timeBetween: float;

var pos: Vector3;
var scale: Vector3;
var z = 0;
function Start () {
	for( var i=0; i<30; i++ ) {
		z += Random.Range(15,25);
		pos = Vector3(Random.Range (-4, 4), .6, z + 30);
		scale = Vector3(Random.Range (.50, 2.50), Random.Range (.50, 2.50), Random.Range (.50, 2.50));
		var obs = Instantiate (obstacle, pos, Quaternion.identity) as GameObject;
		obs.transform.localScale = scale;
	}
	timeSinceLast = 0;
	timeBetween = Random.Range (3, 7);
}

function Update () {
	timeSinceLast += Time.deltaTime;
	
	if (timeSinceLast >= timeBetween) {
		pos = Vector3(Random.Range (-4, 4), .6, z + player.transform.position.z + 30);
		scale = Vector3(Random.Range (.50, 2.50), Random.Range (.50, 2.50), Random.Range (.50, 2.50));
		var obs = Instantiate (obstacle, pos, Quaternion.identity) as GameObject;
		obs.transform.localScale = scale;
		timeSinceLast = 0;
		timeBetween = Random.Range (1, 3);
	}
}