import Fitty from "./Fitty.vue";
import { DefineComponent, Plugin } from "vue";

const plugin: Plugin = {
  install(app) {
    app.component(Fitty.name, Fitty);
  },
};

export { Fitty };

export default plugin;
