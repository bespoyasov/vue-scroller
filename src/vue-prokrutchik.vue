<template>
  <div class="ab_scroller">
    <div class="ab_scroller-wrapper">
      <div class="ab_scroller-border ab_scroller-border--left"></div>
      <div class="ab_scroller-border ab_scroller-border--right"></div>
      <div class="ab_scroller-strip">
        <slot></slot>
      </div>

      <div class="ab_scroller-scrollwrap">
        <div class="ab_scroller-scrollbar"></div>
      </div>
      <div class="ab_scroller-anchors"></div>
    </div>
  </div>
</template>

<script>
import "prokrutchik";

export default {
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    this.scroller = new Scroller({
      el: this.$el,
      useOuterHtml: true,
      ...this.config
    });
  },
  updated() {
    this.scroller.update({ ...this.config });
  }
};
</script>

<style src="../node_modules/prokrutchik/build/styles-min.css" />