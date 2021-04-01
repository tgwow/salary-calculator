class Calculator {
	constructor (name, email) {
		this.name = name
		this.email = email
	}

	set (values) {
		this.salary = values.salary
		this.role = values.role
	}

	calculate(salary, percentage, role) {
			return salary - (salary * percentage)
	}

	generate() {
		const salary = parseFloat(this.salary)
		switch (this.role) {
			case 'DEVELOPER':
				if (salary >= 3000.00)
					return this.calculate(salary, 0.20, this.role)
				else
					return this.calculate(salary, 0.10, this.role)
			case 'DBA':
				if (salary >= 2000.00)
					return this.calculate(salary, 0.25, this.role)
				else
					return this.calculate(salary, 0.15, this.role)
			case 'TESTER':
				if (salary >= 2000.00)
					return this.calculate(salary, 0.25, this.role)
				else
					return this.calculate(salary, 0.15, this.role)
			case 'MANAGER':
				if (salary >= 10000.00)
					return this.calculate(salary, 0.30, this.role)
				else
					return this.calculate(salary, 0.20, this.role)
			default:
				throw `Unhandled role ${this.role}`
		}
	}
}

module.exports = Calculator
