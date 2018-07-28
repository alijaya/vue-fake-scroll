<template>
  <div id="app">
    <VueFakeScroll ref="fake-scroll" class="fake-scroll" :scroll-width="2000" :scroll-height="2000" @update="handleUpdate">
      <div class="content">
        <p class="text">
          scrollLeft: {{scrollLeft}}
          <br />
          scrollTop: {{scrollTop}}
          <br />
          scrollWidth: {{scrollWidth}}
          <br />
          scrollHeight: {{scrollHeight}}
          <br />
          clientWidth: {{clientWidth}}
          <br />
          clientHeight: {{clientHeight}}
          <br />
          scrollLeftMax: {{scrollLeftMax}}
          <br />
          scrollTopMax: {{scrollTopMax}}
          <br />
          scrollLeftInterval: {{scrollLeftInterval}}
          <br />
          scrollTopInterval: {{scrollTopInterval}}
          <br />
        </p>
      </div>
    </VueFakeScroll>
  </div>
</template>

<script>
import VueFakeScroll from './components/VueFakeScroll'

export default {
  name: 'app',
  components: {
    VueFakeScroll,
  },
  data() {
    return {
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0,
      scrollHeight: 0,
      clientWidth: 0,
      clientHeight: 0,
      scrollLeftMax: 0,
      scrollTopMax: 0,
      scrollLeftInterval: 0,
      scrollTopInterval: 0,
    }
  },
  methods: {
    handleUpdate(e) {
      this.scrollLeft = e.scrollLeft
      this.scrollTop = e.scrollTop
      this.scrollWidth = e.scrollWidth
      this.scrollHeight = e.scrollHeight
      this.clientWidth = e.clientWidth
      this.clientHeight = e.clientHeight
      this.scrollLeftMax = e.scrollLeftMax
      this.scrollTopMax = e.scrollTopMax
      this.scrollLeftInterval = e.scrollLeftInterval
      this.scrollTopInterval = e.scrollTopInterval
    }
  }
}
</script>

<style>
html, body, #app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

</style>

<style scoped>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fake-scroll {
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.text {
  width: 200px;
  white-space: nowrap;
}

.long-text {
  padding: 3em;
}

</style>
