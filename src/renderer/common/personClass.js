class Person {
	constructor(role) {
		if (new.target === Person) {
			throw new Error('不能实例Person')
		}
		this.role = role
		this.health = 100
		this.blue = 100
	}
}

class APerson extends Person {
	constructor(name) {
		super('p1')
		this.name = name
		this.color = 'red'
	}
}

class BPerson extends Person {
	constructor(name) {
		super('p2')
		this.name = name
		this.color = 'blue'
	}
}

function character_creator(type) {
	switch (type) {
		case 'p1':
			return APerson
		case 'p2':
			return BPerson
		default:
			throw new Error('参数错误, 可选参数: p1,p2')
	}
}

const CharacterPOne = character_creator('p1')
const CharacterPTwo = character_creator('p2')

export { CharacterPOne, CharacterPTwo }
