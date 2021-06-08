<template>
  <div class="mainwrap" :id="contentID">
    <slot name="content" />
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import fitty from "fitty";
import { v4 as uuidv4 } from "uuid";

interface optionsInterface {
  minSize?: number;
  maxSize?: number;
}

export default defineComponent({
  setup() {
    const contentID = "fitty-" + uuidv4();
    return {
      contentID,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const fittyInstance = fitty("#" + this.contentID, this.options);
      console.log(fittyInstance);
    });
  },
  name: "fitty",
  props: { options: Object as () => optionsInterface },
});
</script>
<style scoped>
.mainwrap {
  position: relative;
}

.content {
  position: relative;
  overflow: hidden;
}

.svgoverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
