declare module "vue-prokrutchik" {
  import * as Vue from "vue";
  import * as ScrollerBase from "prokrutchik";

  type VueScrollerProps = {
    position: ScrollerBase.ScrollDestination;
    duration: ScrollerBase.MilliSecondsCount;

    scrollbar: ScrollerBase.ElementVisibility;
    navigation: ScrollerBase.ElementVisibility;
    align: ScrollerBase.ContentAlignment;

    onItemClick: (e: MouseEvent | TouchEvent) => void;
  };

  const Scroller: Vue.DefineComponent<VueScrollerProps>;
  export default Scroller;
}
