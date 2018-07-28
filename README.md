# vue-fake-scroll

Vue Component for creating fake scroll. Sometimes you only need to create scroll area without actually scrolling the content (fixed) and you use the scroll data to move another thing. This is what you need!

[See here the Demo](https://alijaya.github.io/vue-fake-scroll/)

## Installation

```npm
npm install --save vue-fake-scroll
```

or

```bash
yarn add vue-fake-scroll
```

## Import

### Global Registration

```javascript
import Vue from 'vue'
import VueFakeScroll from 'vue-fake-scroll'

Vue.component('vue-fake-scroll', VueFakeScroll)
```

### In Component Registration:

```html
<template>
  ...
</template>
<script>
import VueFakeScroll from 'vue-fake-scroll'

export default {
  name: 'YourComponentName',
  components: {
    VueFakeScroll,
    ...
  },
  ...
}
</script>
```

## Not Using Webpack

If you don't use webpack (for example in CodePen etc):

```html
<link rel="stylesheet" href="node-modules/vue-fake-scroll/dist/vue-fake-scroll.css" />
<script src="node-modules/vue-fake-scroll/dist/vue-fake-scroll.common.js"></script>
```

or use unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/vue-fake-scroll/dist/vue-fake-scroll.css" />
<script src="https://unpkg.com/vue-fake-scroll/dist/vue-fake-scroll.common.js"></script>
```

and then you still need to register it:

```javascript
Vue.component('vue-fake-scroll', VueFakeScroll)
```

## Basic Usage

You need to set up the virtual scroll area size.

For example: The scroll area needs to be 2000 x 3000 inside 100 x 200 window. You need to set property of VueFakeScroll `:scroll-width="2000"` and `:scroll-height="3000"`. You need also to resize the component to 100 x 200 with CSS.
```html
<template>
  <VueFakeScroll class="scroll" :scroll-width="2000" :scroll-height="3000">
    ...
  </VueFakeScroll>
</template>

<style scoped>
.scroll {
  width: 100px;
  height: 200px;
}
</style>
```

## Use The Data

So you need to get the scroll data, you can do it with listening the `@update` event. The `@update` event will fire when:

- The user scroll
- `scrollTop` or `scrollLeft` of the element (not the component) changed programmatically
- The `scrollWidth` or `scrollHeight` of the component (not the element) changed by binding
- The element changed size because of css (change in pixel, so if it's in percentage, if the parent change, it will change too). Size change detection using (vue-resize)[https://github.com/Akryum/vue-resize] component.

The object passed to the event contains these infos:

- `scrollLeft`: how far horizontal space scrolled in pixel
- `scrollTop`: how far vertical space scrolled in pixel
- `scrollWidth`: the total scrollable area width
- `scrollHeight`: the total scrollable area height
- `clientWidth`: the viewing window width (vertical scrollbar not included), could be smaller than the css
- `clientHeight`: the viewing window height (horizontal scrollbar not included), could be smaller than the css
- `scrollLeftMax`: the maximum value for `scrollLeft`, it's calculated by `scrollWidth - clientWidth`
- `scrollTopMax`: the maximum value for `scrollTop`, it's calculated by `scrollHeight - clientHeight`
- `scrollLeftInterval`: how far horizontal space scrolled in range from 0 to 1, it's calculated by `scrollLeft / scrollLeftMax`
- `scrollTopInterval`: how far vertical space scrolled in range from 0 to 1, it's calculated by `scrollTop / scrollTopMax`

Example:

```html
<template>
  <VueFakeScroll 
    :scroll-width="scrollWidth" 
    :scroll-height="scrollHeight"
    :style="{width: width+'px', height: height+'px'}"
    @update="handleUpdate">
    {{scrollLeftInterval}} - {{scrollTopInterval}}
  </VueFakeScroll>
</template>

<script>
import VueFakeScroll from 'vue-fake-scroll'
export default {
  data() {
    return {
      scrollWidth: 2000,
      scrollHeight: 3000,
      width: 200,
      height: 200,
      scrollLeftInterval: 0,
      scrollTopInterval: 0,
    }
  },
  methods: {
    handleUpdate(e) {
      this.scrollLeftInterval = e.scrollLeftInterval
      this.scrollTopInterval = e.scrollTopInterval
    }
  }
}
</script>
```

## Caveats

You can style the component with the `margin` and `border`, but please don't style it with `padding`, because it behaves a little bit different than regular div. If you need a `padding`, just make a `div` as a direct child of this component, and set the `width` and `height` to `100%` and then you can put the `padding` in this `div`.

Example:

```html
<template>
  <VueFakeScroll class="outer" :scroll-width="1000" :scroll-height="1000">
    <div class="inner">
      ... another child here
    </div>
  </VueFakeScroll>
</template>
<style scoped>
.outer {
  width: 400px;
  height: 400px;
  margin: 50px;
  border: 10px;
}
.inner {
  padding: 50px;
}
</style>
```
