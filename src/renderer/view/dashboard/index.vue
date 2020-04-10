<template>
  <div class="dashboard">
    <div ref="ground" class="ground">
      <div v-for="(per, key) in person" :key="key" class="person" :style="{top: per.top + 'px', left: per.left + 'px'}"></div>
    </div>
    <button @click="createChildWin">des</button>
    <button @click="createA">createA</button>
    <button @click="createB">createB</button>
  </div>
</template>

<script>
  import { CharacterPOne, CharacterPTwo } from '../../common/characterClass'
  import { BulletClass } from '../../common/bulletClass'
  const { ipcRenderer } = require('electron')

  export default {
    name: 'Dashborad',
    data() {
      return {
        person: []
      }
    },
    methods: {
      createA() {
        this.person.push(new CharacterPOne())
      },
      createB() {
        this.person.push(new CharacterPTwo())
      },
      createChildWin() {
        const data = this._.cloneDeep(this.person)
        this._.forEach(data, (item, key) => {
          console.log(key)
          console.log(item)
          if (item) data.splice(key, 1)
          console.log('per', data)
        })
        this.person = data
      }
    }
  }
</script>

<style lang="scss">
.dashboard {
	overflow: hidden;
	.ground {
		position: relative;
		width: 10000px;
		height: 600px;
		background: linear-gradient(to right, #999 50%, #ccc 0);
		background-size: 100px;
		.person {
			position: absolute;
      left: 0;
      top: 0;
			width: 10px;
			height: 10px;
			background: red;
		}
	}
}
</style>
