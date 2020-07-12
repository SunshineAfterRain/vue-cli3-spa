<template>
  <div class="machine">
    <div class="main">
      <div class="doll-content" ref="scene">
        <div
          class="hook"
          ref="hook"
          :style="{ transform: `translate3d(${hookMoveX}px,${hookMoveY}px,0)` }"
        ></div>
        <div
          ref="doll"
          class="doll-item"
          v-for="item in dollList"
          :style="{ left: item.left + 'px', bottom: item.bottom + 'px' }"
          :key="item.id"
        >{{ item.id }}</div>
      </div>
      <div class="operation">
        <div class="direction">
          <div class="btn" @mousedown="moveLeft">左</div>
          <div class="btn" @mousedown="moveRight">右</div>
        </div>
        <div class="play" @click="play">开始</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      hookMoveX: 100,
      hookMoveY: -450,
      isCatch: false,
      isStart: false,
      isDown: false,
      isUp: false,
      dollWidth: '',
      disX: '',
      disY: '',
      hook: {},
      scene: {},
      dollList: []
    }
  },
  created() {
    let num = 6
    for (let i = 0; i < 33; i++) {
      this.dollList.push({
        id: i,
        left: (i % num) * 55 + (i % num) * 10,
        bottom: parseInt(i / num) * 55,
        center: [
          (i % num) * 55 + (i % num) * 10 + 27.5,
          parseInt(i / num) * 55 + 27.5
        ]
      })
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$nextTick(() => {
        let { offsetWidth, offsetHeight } = this.$refs.scene
        this.disX = this.$refs.scene.getBoundingClientRect().left
        this.disY = this.$refs.scene.getBoundingClientRect().top
        this.scene = { w: offsetWidth, h: offsetHeight }
        this.dollWidth = this.$refs.doll[0].offsetWidth
        let { offsetWidth: w, offsetHeight: h } = this.$refs.hook
        this.hook = { w, h }
        this.hookMoveX = this.scene.w / 2 - this.hook.w / 2
        this.hookMoveY = -(this.scene.h - this.hook.h)
      })
    },
    moveRight() {
      if (!this.isStart) {
        this.hookMoveX += 10
        if (this.hookMoveX >= this.scene.w - this.hook.w) {
          this.hookMoveX = this.scene.w - this.hook.w - 10
        }
      }
    },
    moveLeft() {
      if (!this.isStart) {
        this.hookMoveX -= 10
        if (this.hookMoveX <= 0) {
          this.hookMoveX = 0
        }
      }
    },
    play() {
      if (!this.isStart) {
        this.isStart = true
        this.isDown = true
        this.downAnimation()
      }
    },
    downAnimation() {
      this.checkCrash()
      if (!this.isCatch) {
        if (this.hookMoveY <= 0) {
          this.hookMoveY += 3
          requestAnimationFrame(this.downAnimation)
        }
      }
    },
    checkCrash() {
      let x =
        Math.floor(this.$refs.hook.getBoundingClientRect().left - this.disX) +
        27.5
      let y =
        Math.floor(
          this.scene.h - this.$refs.hook.getBoundingClientRect().top - this.disY
        ) + 27.5

      for (let i = 0; i < this.dollList.length; i++) {
        if (Math.abs(this.dollList[i].center[0] - x) < 55) {
          if (Math.abs(this.dollList[i].center[1] - y) < 55) {
            console.log(
              i,
              this.dollList[i].center[0],
              this.dollList[i].center[1],
              '=================================='
            )
            this.isCatch = true
            return
          } else {
            this.isCatch = false
          }
        } else {
          this.isCatch = false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.machine {
  width: 100%;
  .main {
    width: 100%;
    .doll-content {
      box-sizing: border-box;
      box-sizing: border-box;
      height: 10rem;
      margin: 0.5rem 0.3rem;
      border: 2px solid #f2f2f2;
      position: relative;
      .hook {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateX(-50%);
        width: 1rem;
        height: 1rem;
        background-color: yellowgreen;
      }
      .doll-item {
        width: 1rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #ffffff;
        background-color: red;
        font-size: 0.28rem;
        position: absolute;
        bottom: 0;
        overflow: hidden;
      }
    }
    .operation {
      font-size: 0.32rem;
      display: flex;
      justify-content: space-evenly;
      .direction {
        width: 2.5rem;
        display: flex;
        justify-content: space-between;
        .btn {
          width: 1rem;
          height: 0.88rem;
          line-height: 0.88rem;
          text-align: center;
          background-color: bisque;
          border-radius: 0.12rem;
        }
      }
      .play {
        width: 2rem;
        height: 1rem;
        border-radius: 0.4rem;
        background-color: red;
        line-height: 1rem;
        text-align: center;
      }
    }
  }
}
</style>
