import vue from "rollup-plugin-vue";

export default {
  input: "./index.js",
  output: {
    name: "Scroller",
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true,
      },
    }),
  ],
};
