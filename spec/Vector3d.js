describe('Vector3d', function () {
	it('should create a new Vector3d', function () {
		var vector3d = new Vector3d;

		expect(vector3d);
	})

	it('should have a position x, y, z and scale', function () {
		var vector3d = new Vector3d;

		expect(vector3d.x).toBeDefined();
		expect(vector3d.y).toBeDefined();
		expect(vector3d.z).toBeDefined();
		expect(vector3d.s).toBeDefined();
	})

	it('should create a Vector3d with defined position x, z and scale', function () {
		var vector3d = new Vector3d(0, 2, 1);

		expect(vector3d.x).toBe(0);
		expect(vector3d.y).toBe(2);
		expect(vector3d.z).toBe(1);
		expect(vector3d.s).toBe(1);
	})

	it('should add a Vector3d', function () {
		var vector3d = new Vector3d(0, 2, 1);
		vector3d.add(new Vector3d(1, 0, 1));

		expect(vector3d.x).toBe(1);
		expect(vector3d.y).toBe(2);
		expect(vector3d.z).toBe(2);
		expect(vector3d.s).toBe(1);
	})

	it('should multiply a Vector3d', function () {
		var vector3d = new Vector3d(0, 2, 1);
		vector3d.mul(new Vector3d(1, 0, 1));

		expect(vector3d.x).toBe(0);
		expect(vector3d.y).toBe(0);
		expect(vector3d.z).toBe(1);
		expect(vector3d.s).toBe(1);
	})

	it('should substract a vector3d', function () {
		var vector3d = new Vector3d(0, 2, 1);
		vector3d.sub(new Vector3d(1, 0, 1));

		expect(vector3d.x).toBe(-1);
		expect(vector3d.y).toBe(2);
		expect(vector3d.z).toBe(0);
		expect(vector3d.s).toBe(1);
	})


})
