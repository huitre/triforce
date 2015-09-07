describe('Camera', function () {
	it('should create a new Camera', function () {
		var camera = new Camera(new Vector3d(), new Vector2d(640, 480), [45, 45]);

		expect(camera);
	})

	it('should not create a new Camera with incorrect values', function () {
		expect(function() {
			new Camera(new Vector3d, new Vector2d(640, 480), 3)
		}).toThrow();
		expect(function () {
			new Camera(new Array, new Vector2d(640, 480), [45, 45])
		}).toThrow();
		expect(function () {
			new Camera(new Vector2d, new Vector2d(640, 480), null)
		}).toThrow();
	})

	it('should have a Vector3d as a position', function () {
		var camera = new Camera(new Vector3d(), new Vector2d(640, 480), [45, 45]);
		expect(camera.position()).toEqual(new Vector3d);
	})

	it('should have a Vector2d as viewport', function () {
		var camera = new Camera(new Vector3d, new Vector2d(640, 480))
		
		expect(camera.viewPort()).toEqual(new Vector2d(640, 480));
		
		camera.viewPort(new Vector2d(800, 600));
		expect(camera.viewPort()).toEqual(new Vector2d(800, 600));
		
	})

	it('should have a FOV', function () {
		var camera = new Camera(new Vector3d, new Vector2d(640, 480), [45, 45]);

		expect(camera.fov()).toEqual([45, 45]);

		camera.fov([90, 90]);
		expect(camera.fov()).toEqual([90, 90]);
	})


	it('should convert Vector3d to Vector2d', function () {
		var camera = new Camera(new Vector3d, new Vector2d(640, 480), [45, 45]),
				vector2d = new Vector2d();

		expect(camera.project(new Vector3d(30, 34, 12))).toEqual(vector2d);
	})

})