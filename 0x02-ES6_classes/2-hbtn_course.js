export default class HolbertonCourse {
	constructor(name, length, students) {
		this.name = name;
		this.length = length;
		this.students = students;
	}

	/* getter and setter for name */
	get name() {
		return this._nama;
	}

	set name(name) {
		if ((typeof name !== 'string') && !(name instanceof String)) {
			throw new TypeError("Name must be a string");
		}

		this._name = name;
	}
	
	/* getter and setter for Length */
	get length() {
		return this._length;
	}

	set length(length) {
		if ((typeof length !== 'number') && !(length instanceof Number)) {
			throw new TypeError('length must be number');
		}

		this._length = length;
	}

	/* getter and setter for students */
	get studenst() {
		return this._students;
	}

	set students(students) {
		if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
			throw TypeError('Students must be an array of string');
		}
		this._students = students;
	}

}
