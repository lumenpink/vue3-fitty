import Fitty from "./Fitty.vue";
import { Plugin } from "vue";

const plugin: Plugin = {
  install(app) {
    app.component(Fitty.name, Fitty);
  },
};

export { Fitty };

export default plugin;
