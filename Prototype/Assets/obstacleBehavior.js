#pragma strict

function Start () {

}

function Update () {
	if(transform.position.z < Camera.main.transform.position.z) {
		Destroy(gameObject);
	}
}