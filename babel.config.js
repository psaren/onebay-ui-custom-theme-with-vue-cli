module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "onebay-ui",
        libraryDirectory: "es",
        style: name => {
          return `${name.replace("/es/", "/src/style/components/")}.scss`;
        }
      }
    ]
  ]
};
