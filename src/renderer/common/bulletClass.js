class BulletClass {
	constructor(owner) {
		// if (new.target === BulletClass) {
		// 	throw new Error('不能实例Person')
		// }
		this.owner = owner
		this.health = 10
		// todo bg/position
	}
}

export { BulletClass }
