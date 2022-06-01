# Vue Scroller

Vue wrapper component for [Scroller](https://github.com/bespoyasov/scroller).

## Installation

`npm install prokrutchik vue-prokrutchik`

## Usage

```js
import { Scroller } from "vue-prokrutchik";

export default {
  components: {
    Scroller,
  },
  data() {
    return {
      position: 150,
      duration: 250,

      scrollbar: "visible",
      navigation: "visible",
      align: "center",

      onItemClick: (event) => {
        /* event is Touch event or MouseEvent */
      },
    };
  },
};
```

```html
<template>
  <scroller
    :position="position"
    :duration="duration"
    :scrollbar="scrollbar"
    :navigation="navigation"
    :align="align"
    :onItemClick="onItemClick"
  >
    <div class="item" data-anchor="First">First Item</div>
    <div class="item" data-anchor="Second">Second Item</div>
    <div class="item" data-anchor="Third">Third Item</div>
  </scroller>
</template>

<style>
  @import "vue-prokrutchik/style.css";
</style>
```

## Configuration

For more configuration options, check out [Scroller settings](https://github.com/bespoyasov/scroller#configuration).
