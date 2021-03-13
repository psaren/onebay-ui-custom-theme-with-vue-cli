<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>onebay-ui custom theme with vue-cli</h1>
  <Button />
</template>

<script>
import { defineComponent } from "vue";
import Button from "./pages/button/index";
import "onebay-ui/src/style/components/loading.scss"
export default defineComponent({
  name: "App",
  components: {
    Button
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
