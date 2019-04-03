<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>IoTrain</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <MasterController />
    </v-content>
  </v-app>
</template>

<script>
import MasterController from "./components/MasterController";

export default {
  name: "App",
  components: {
    MasterController
  },
  data() {
    return {
      //
    };
  }
};
</script>
