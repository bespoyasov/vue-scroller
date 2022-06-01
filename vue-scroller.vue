<style scoped>
@import "prokrutchik/styles.css";
</style>

<script>
import { h } from "vue";
import { Scroller } from "prokrutchik";

export default {
  props: {
    position: [String, Number],
    duration: Number,
    scrollbar: String,
    navigation: String,
    align: String,
    onItemClick: Function,
  },
  computed: {
    config() {
      return {
        scrollbar: this.scrollbar,
        navigation: this.navigation,
        align: this.align,
        onItemClick: this.onItemClick,
      };
    },
  },
  mounted() {
    this.instance ??= new Scroller({
      element: this.$el,
      useExternalLayout: true,

      startPosition: this.position,
      startDuration: this.duration,
      ...this.config,
    });
  },
  watch: {
    position(newPosition) {
      this.instance?.scrollTo(newPosition, this.duration);
    },
  },
  updated() {
    this.instance?.update({ ...this.config });
  },
  render() {
    function isFragment({ el, type, children }) {
      return !el && typeof type === "symbol" && Array.isArray(children) && !!children.length;
    }

    const items = [];

    this.$slots.default().forEach((t) => {
      if (isFragment(t)) items.push(...t.children);
      else items.push(t);
    });

    return h("article", [
      h(
        "div",
        { class: "scroller-container" },
        h(
          "ul",
          { class: "scroller-content" },
          items.map((child) =>
            h(
              "li",
              {
                class: "scroller-item",
                "data-anchor": child.props?.["data-anchor"],
              },
              child
            )
          )
        )
      ),
      h("div", { class: "scroller-scrollbar" }, h("div", { class: "scroller-handle" })),
      h(
        "footer",
        { class: "scroller-navigation" },
        items.map((child) => {
          const id = child.props?.["data-anchor"];
          return id
            ? h("button", { class: "scroller-button", "data-id": id, type: "button" }, id)
            : null;
        })
      ),
    ]);
  },
};
</script>
