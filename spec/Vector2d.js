describe('Vector2d', function () {
	it('should create a new Vector2d', function () {
		var vector2d = new Vector2d;

		expect(vector2d);
	})

	it('should have a position x, y', function () {
		var vector2d = new Vector2d;

		expect(vector2d.x).toBeDefined();
		expect(vector2d.y).toBeDefined();
	})

	it('should create a Vector3d with defined position x, z and scale', function () {
		var vector2d = new Vector2d(0, 2, 1);

		expect(vector2d.x).toBe(0);
		expect(vector2d.y).toBe(2);
	})

	it('should add a Vector3d', function () {
		var vector2d = new Vector2d(0, 2);
		vector2d.add(new Vector2d(1, 0));

		expect(vector2d.x).toBe(1);
		expect(vector2d.y).toBe(2);
	})

	it('should multiply a Vector3d', function () {
		var vector2d = new Vector2d(0, 2);
		vector2d.mul(new Vector2d(1, 0));

		expect(vector2d.x).toBe(0);
		expect(vector2d.y).toBe(0);
	})

	it('should substract a vector2d', function () {
		var vector2d = new Vector3d(0, 2);
		vector2d.sub(new Vector3d(1, 0));

		expect(vector2d.x).toBe(-1);
		expect(vector2d.y).toBe(2);
	})


})
