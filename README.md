# vue-prokrutchik

Vue wrapper for [Prokrutchik](https://github.com/bespoyasov/scroller).

## Installation

`npm install vue-prokrutchik --save`

## Usage

```javascript
// in <script>:
import VueProkrutchik from 'vue-prokrutchik'

export default {
  components: {
    scroller: VueProkrutchik,
  },
  data() {
    return {
      config: {
        scrollbar: 'hidden',
        anchors: 'hidden',
      },
    }
  },
  methods: {
    updateScroller() {
      this.config = {
        ...this.config,
        scrollbar: 'visible',
        anchors: 'visible',
      }
    },
  },
  mounted() {
    setTimeout(this.updateScroller, 2500)
  },
}
```

```html
<!-- in <template>: -->
<template>
  <scroller :config="config">
    <!-- or <scroller data-scrollbar="hidden" data-anchors="hidden"> -->
    <div class="item" v-for="i in 15" :key="`scroller-item-${i}`" :data-anchor="`item-${i}`">
      Content item #{{ i }}
    </div>
  </scroller>
</template>
```

## More settings

Check out [original script settings](https://github.com/bespoyasov/scroller#settings) for more customisation.

## Help

If you have any questions send an email to [bespoyasov@me.com](mailto:bespoyasov@me.com).
