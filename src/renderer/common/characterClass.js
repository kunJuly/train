/*
* 角色共同属性
* */
class Character {
	constructor(role) {
		if (new.target === Character) {
			throw new Error('不能实例Person')
		}
		this.role = role
		this.health = 100
		this.blue = 100
		this.width = 40
		this.height = 100
	}
}
/*
* P1 属性
* */
class ACharacter extends Character {
	constructor(name) {
		super('p1')
		const vm = this
		this.name = name
		this.color = 'red'
		this.top = 0
		this.left = 0
		// todo: bg
		const PaLinstener = (e) => {
			switch (e.keyCode) {
				case 87:
					vm.top -= 10
					return
				case 83:
					vm.top += 10
					return
				case 65:
					vm.left -= 10
					return
				case 68:
					vm.left += 10
					return
			}
		}
		document.addEventListener('keydown', PaLinstener)
	}
}
/*
* P2属性
* */
class BCharacter extends Character {
	constructor(name) {
		super('p2')
		this.name = name
		this.color = 'blue'
		this.top = 0
		this.left = 100
		// todo: bg
	}
}

function character_creator(type) {
	switch (type) {
		case 'p1':
			return ACharacter
		case 'p2':
			return BCharacter
		default:
			throw new Error('参数错误, 可选参数: p1,p2')
	}
}

const CharacterPOne = character_creator('p1')
const CharacterPTwo = character_creator('p2')

export { CharacterPOne, CharacterPTwo }
