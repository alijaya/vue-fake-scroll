<template>
  <div id="app">
    <FakeScroll ref="fake-scroll" class="fake-scroll" :scroll-width="2000" :scroll-height="2000" @update="handleUpdate">
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
    </FakeScroll>
    <SmoothScroll class="smooth-scroll">
      <div class="long-text">
        <ol>
          <li v-for="n in 200" :key="n">I have {{n}} doggo!</li>
        </ol>
      </div>
    </SmoothScroll>
    <SmoothScroll class="horizontal-scroll" :invert="true">
      <div class="long-text">
        <p class="horizontal-text">
          <span v-for="n in 200" :key="n">I have {{n}} doggo!</span>
        </p>
      </div>
    </SmoothScroll>
    <!-- <div class="test" /> -->
  </div>
</template>

<script>
import FakeScroll from './components/FakeScroll'
import SmoothScroll from './components/SmoothScroll'

export default {
  name: 'app',
  components: {
    FakeScroll,
    SmoothScroll,
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
  position: absolute;
  width: 50%;
  height: 50%;
}

.smooth-scroll {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 50%;
  height: 50%;
}

.horizontal-scroll {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 50%;
  height: 50%;
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

.horizontal-text {
  width: 2000px;
}

.test2 {
  position: relative;
}

.test {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 2000px;
  left: 2000px;
  background-color: red;
  /* transform: translate(2000px, 2000px) scale(2) rotate(45deg); */
}
</style>
