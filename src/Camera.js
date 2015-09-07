var Camera = function (vector3d, viewPort, fov) {
	this._position = 	typeof vector3d !== "undefined" ? vector3d : null;
	this._viewport = 	typeof viewPort !== "undefined" ? viewPort : null;
	this._fov = typeof fov !== "undefined" ? fov : [90, 90];
	
	if (!this._position || !(this._position instanceof Vector3d))
		throw new Error('First argument of Camera must be Vector3d');

	if (!this._viewport || !(this._viewport instanceof Vector2d))
		throw new Error('Second argument of Camera must be Vector2d');

	if (!this._fov ||  (!(this._fov instanceof Array) || this._fov.length != 2))
		throw new Error('Last argument of Camera must be an Array of length 2');
}

Camera.prototype.position = function (vector3d) {
	if (typeof vector3d === "undefined")
		return this._position;
	if (vector3d instanceof Vector3d)
		this._position = vector3d;
}

Camera.prototype.fov = function (fov) {
	if (typeof fov === "undefined")
		return this._fov;
	if (fov instanceof Array)
		this._fov = fov;
}

Camera.prototype.viewPort = function (viewPort) {
	if (typeof viewPort === "undefined")
		return this._viewport;
	if (viewPort instanceof Vector2d)
		this._viewport = viewPort;
}