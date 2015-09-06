describe('Camera', function () {
	it('should create a new Camera', function () {
		var camera = new Camera;

		expect(camera);
	})

	it('should have a Vector3d as a position', function () {
		var camera = new Camera;

		expect(camera.position()).toEqual(new Vector3d);
	})

	it('should have a Vector2d as viewport', function () {
		var camera = new Camera(new Vector3d, new Vector2d(640, 480))
		
		expect(camera.viewport).toEqual([640, 480]);

		var camera = new Camera(new Vector3d, 640);
		expect(camera.viewport).toBeUndefined();
	})

	it('should have a FOV', function () {
		var camera = new Camera(new Vector3d, new Vector2d(640, 480), [45, 45]);

		expect(camera.fov).toEqual([45, 45]);
	})


	it('should convert Vector3d to Vector2d', function () {
		var camera = new Camera(new Vector3d, new Vector2d(640, 480), [45, 45]),
				vector2d = new Vector2d();

		expect(camera.project(new Vector3d(30, 34, 12))).toEqual(vector2d);
	})

})