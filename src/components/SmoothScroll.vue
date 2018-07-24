<template>
  <FakeScroll 
    :scroll-width="scrollWidth" 
    :scroll-height="scrollHeight" 
    @update="handleUpdate">
    <div class="content" ref="content">
      <ResizeObserver @notify="handleResize"/>
      <slot />
    </div>
  </FakeScroll>
</template>

<script>
import FakeScroll from './FakeScroll'
import { ResizeObserver } from 'vue-resize'

export default {
  name: 'smooth-scroll',
  components: {
    FakeScroll,
    ResizeObserver,
  },
  props: {
    invert: false,
  },
  data() {
    return {
      scrollWidth: 0,
      scrollHeight: 0,
    }
  },
  mounted() {
    this.handleResize()
  },
  methods: {
    handleResize() {
      const el = this.$el
      const content = this.$refs.content

      // handle precision error
      // if content.scrollWidth just 1 pixel more than el.clientWidth, just clamp it up
      this.scrollWidth = (content.scrollWidth - el.clientWidth <= 1) ? el.clientWidth : content.scrollWidth
      this.scrollHeight = (content.scrollHeight - el.clientHeight <= 1) ? el.clientHeight : content.scrollHeight
    },
    handleUpdate(e) {
      this.handleResize()

      const content = this.$refs.content
      content.style.transform = `translate(-${e.scrollLeft}px, -${e.scrollTop}px)`
      this.$emit('update', e)
    }
  }
}
</script>

<style scoped>
.content {
  width: auto;
  height: auto;
  transition: transform 600ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>