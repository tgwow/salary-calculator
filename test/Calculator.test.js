const Calculator = require('../lib/Calculator')

const calc = new Calculator('Jhon', 'jhon@test.com')
describe('Calculator tests', () => {
	test('It should throw an exception when passed a invalid role', () => {
		const values = {
			salary: 2.500,
			role: 'DESIGNER'
		}
		calc.set(values)
		expect(() => calc.generate()).toThrow(`Unhandled role ${values.role}`)
	})

	describe('Developer tests', () => {
		test('It should return correct final salary if the costumer salary is equal or greater than 3.000,00', () => {
			const values = {
				salary: 3000.00,
				role: 'DEVELOPER'
			}
			calc.set(values)
			expect(calc.generate()).toBeCloseTo(2400.00, 2)
		})

		test('It should return correct final salary if the costumer salary is less than 3.000,00', () => {
			const values = {
				salary: 2500.00,
				role: 'DEVELOPER'
			}
			calc.set(values)
			expect(calc.generate()).toBe(2250.00)
		})
	})

	describe('DBA tests', () => {
		test('It should return correct final salary if the costumer salary is equal or greater than 2.000,00', () => {
			const values = {
				salary: 4000.00,
				role: 'DBA'
			}
			calc.set(values)
			expect(calc.generate()).toBeCloseTo(3000.00, 2)
		})

		test('It should return correct final salary if the costumer salary is less than 2.000,00', () => {
			const values = {
				salary: 1500.00,
				role: 'DBA'
			}
			calc.set(values)
			expect(calc.generate()).toBe(1275.00)
		})
	})

	describe('TESTER tests', () => {
		test('It should return correct final salary if the costumer salary is equal or greater than 2.000,00', () => {
			const values = {
				salary: 4000.00,
				role: 'TESTER'
			}
			calc.set(values)
			expect(calc.generate()).toBeCloseTo(3000.00, 2)
		})

		test('It should return correct final salary if the costumer salary is less than 2.000,00', () => {
			const values = {
				salary: 1500.00,
				role: 'TESTER'
			}
			calc.set(values)
			expect(calc.generate()).toBe(1275.00)
		})
	})

	describe('MANAGER tests', () => {
		test('It should return correct final salary if the costumer salary is equal or greater than 10.000,00', () => {
			const values = {
				salary: 10000.00,
				role: 'MANAGER'
			}
			calc.set(values)
			expect(calc.generate()).toBeCloseTo(7000.00, 2)
		})

		test('It should return correct final salary if the costumer salary is less than 2.000,00', () => {
			const values = {
				salary: 1500.00,
				role: 'MANAGER'
			}
			calc.set(values)
			expect(calc.generate()).toBe(1200.00)
		})
	})
})
