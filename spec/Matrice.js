describe('Matrice', function () {
	it('should create a new Matrice', function () {
		var matrice = new Matrice;

		expect(matrice);
	})

	it('should not create a new Matrice with wrong value as arguments', function () {
		var matrice = new Matrice([], 3, 4);

		expect(matrice.data).toThrowError(/data undefined/);
	})

	it('should have a data when defined', function () {
		var matrice = new Matrice;

		expect(matrice.data).toBeDefined();
	})

	it('should create a Matrice with specified data', function () {
		var matrice = new Matrice(
									[1, 0, 0],
									[0, 1, 0],
									[0, 0, 1],
									[1, 1, 1]
								);

		expect(matrice.data[0][0]).toBe(1);
		expect(matrice.data[1][1]).toBe(1);
		expect(matrice.data[2][2]).toBe(1);
	})

	it('should add a Matrice', function () {
		var matrice = new Matrice(
										[1, 0, 0],
										[0, 1, 0],
										[0, 0, 1],
										[1, 1, 1]
									);
		var matr1ce = new Matrice(
										[1, 0, 0],
										[0, 1, 0],
										[0, 0, 1],
										[1, 1, 1]
									);
		
		matrice.add(matr1ce);

		expect(matrice.data[0][0]).toBe(1);
		expect(matrice.data[1][1]).toBe(1);
		expect(matrice.data[2][2]).toBe(1);
	})

	it('should multiply a Matrice', function () {
		var matrice = new Matrice(
										[1, 0, 0],
										[0, 1, 0],
										[0, 0, 1],
										[1, 1, 1]
									);
		var matr1ce = new Matrice(
										[1, 0, 0],
										[0, 1, 0],
										[0, 0, 1],
										[1, 1, 1]
									);
		
		matrice.mul(matr1ce);

		expect(matrice.data[0][0]).toBe(1);
		expect(matrice.data[1][1]).toBe(1);
		expect(matrice.data[2][2]).toBe(1);
	})

	it('should substract a matrice', function () {
		var matrice = new Matrice(
										[1, 0, 0],
										[0, 1, 0],
										[0, 0, 1],
										[1, 1, 1]
									);
		var matr1ce = new Matrice(
										[1, 0, 0],
										[0, 1, 0],
										[0, 0, 1],
										[1, 1, 1]
									);
		
		matrice.sub(matr1ce);

		expect(matrice.data[0][0]).toBe(1);
		expect(matrice.data[1][1]).toBe(1);
		expect(matrice.data[2][2]).toBe(1);
	})
})
