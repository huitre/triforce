var Camera = function () {
	this._position = new Vector3d(0, 0, 0);
}

Camera.prototype.position = function (Vector3d) {
	if (typeof Vector3d === "undefined")
		return this._position;
	this._position = Vector3d;
}