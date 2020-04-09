<template>
  <div class="dashboard">
    <div ref="ground" class="ground">
      <div ref="person" class="person" :style="{top: person.top + 'px', left: person.left + 'px'}"></div>
    </div>
  </div>
</template>

<script>
  import { CharacterPOne, CharacterPTwo } from '../../common/personClass'
  const { ipcRenderer } = require('electron')

  export default {
    name: 'Dashborad',
    data() {
      return {
        person: {
          top: 0,
          left: 0
        }
      }
    },
    mounted() {
      console.log('p', new CharacterPOne('kk'))
      console.log('p', new CharacterPTwo('A'))
      document.addEventListener('keydown', (e) => {
        this.moveP(e)
        console.log('window-height', window)
        console.log('window-width', window.screen.width)
        console.log('window-height', window.screen.height)
        console.log('window-document.body.clientHeight', document.body.clientHeight)
        console.log('window-document.body.clientHeight', document.body.clientWidth)
      })
    },
    methods: {
      moveP(e) {
        // console.log('e', e)
        /*
        * WASD: 87.65.83.68
        * UDLR: 38.37.40.39
        * */
        console.log('ground', this.$refs.ground.getBoundingClientRect())
        switch (e.keyCode) {
          case 87:
            this.person.top -= 10
            console.log('offset', this.$refs.person)
            console.log('offset', this.$refs.person.getBoundingClientRect())
            return
          case 83:
            this.person.top += 10
            console.log('offset', this.$refs.person)
            console.log('offset', this.$refs.person.getBoundingClientRect())
            return
          case 65:
            this.person.left -= 10
            console.log('offset', this.$refs.person)
            console.log('offset', this.$refs.person.getBoundingClientRect())
            return
          case 68:
            this.person.left += 10
            console.log('offset', this.$refs.person)
            console.log('offset', this.$refs.person.getBoundingClientRect())
            return
        }
      },
      createChildWin() {
        ipcRenderer.send('asynchronous-message', 'ping')
        // ipcRenderer.send('childWind-create-message', {
        //   createChild: true
        // })
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
