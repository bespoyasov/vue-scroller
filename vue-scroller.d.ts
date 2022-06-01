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

  export interface VueScrollerConstructor extends Vue.VueConstructor {
    props: VueScrollerProps;
  }
}
