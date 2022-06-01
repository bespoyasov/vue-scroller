import vue from "rollup-plugin-vue";

export default {
  input: "./index.js",
  output: {
    name: "Scroller",
  },
  plugins: [
    vue({
      css: true,
      template: {
        isProduction: true,
      },
    }),
  ],
};
