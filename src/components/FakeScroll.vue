<template>
  <div class="fake-scroll" @scroll="update">
    <ResizeObserver @notify="update"/>
    <div class="scroll-area" :style="{width: scrollWidth+'px', height: scrollHeight+'px'}" />
    <div class="fixed-area" ref="fixed-area">
      <slot />
    </div>
  </div>
</template>

<script>
import { ResizeObserver } from 'vue-resize'

export default {
  name: 'fake-scroll',
  components: {
    ResizeObserver
  },
  props: {
    scrollWidth: 0,
    scrollHeight: 0,
  },
  mounted() {
    this.update()
  },
  methods: {
    update() {
      const el = this.$el
      const data = {
        scrollLeft: el.scrollLeft,
        scrollTop: el.scrollTop,
        scrollWidth: this.scrollWidth,
        scrollHeight: this.scrollHeight,
        clientWidth: el.clientWidth,
        clientHeight: el.clientHeight,
      }
      data.scrollLeftMax = Math.max(data.scrollWidth - data.clientWidth, 0)
      data.scrollTopMax = Math.max(data.scrollHeight - data.clientHeight, 0)

      data.scrollLeft = Math.min(Math.max(data.scrollLeft, 0), data.scrollLeftMax)
      data.scrollTop = Math.min(Math.max(data.scrollTop, 0), data.scrollTopMax)

      data.scrollLeftInterval = data.scrollLeftMax ? data.scrollLeft / data.scrollLeftMax : 0
      data.scrollTopInterval = data.scrollTopMax ? data.scrollTop / data.scrollTopMax : 0

      const fixed = this.$refs['fixed-area']
      fixed.style.left = data.scrollLeft + 'px'
      fixed.style.top = data.scrollTop + 'px'
      this.$emit('update', data)
    }
  }
}
</script>

<style scoped>
.fake-scroll {
  position: relative;
  padding: 0;
  margin: 0;
  overflow: auto;
}

.scroll-area {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
  padding: 0;
  margin: 0;
}

.fixed-area {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>