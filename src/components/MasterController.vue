<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="600">
      <v-toolbar card dense>
        <v-toolbar-title>
          <span class="subheading">マスコン</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-layout align-center justify-space-between fill-height mb-3>
          <v-flex text-xs-left>
            <v-btn-toggle v-model="direction">
              <v-btn flat value="BACKWARD">
                もどる
              </v-btn>
              <v-btn flat value="STOP">
                とまる
              </v-btn>
              <v-btn flat value="FORWARD">
                すすむ
              </v-btn>
            </v-btn-toggle>
          </v-flex>

          <v-flex text-xs-right>
            <span class="display-3 font-weight-light" v-text="speed"></span>
            <span class="subheading font-weight-light mr-1">%</span>
          </v-flex>
        </v-layout>

        <v-slider
          v-model="speed"
          :disabled="speedDisabled"
          append-icon="add"
          prepend-icon="remove"
          always-dirty
          max="100"
          step="10"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { OPERATE_LOCOMOTIVE } from "../constants/locomotive-mutation";

export default {
  name: "MasterController",
  data() {
    return {
      direction: "STOP",
      speed: 0
    };
  },
  computed: {
    speedDisabled() {
      return this.direction === "STOP";
    }
  },
  watch: {
    direction() {
      this.operateLocomotive();
    },
    speed() {
      this.operateLocomotive();
    }
  },
  created() {},
  methods: {
    async operateLocomotive() {
      await this.$apollo.mutate({
        mutation: OPERATE_LOCOMOTIVE,
        variables: {
          direction: this.direction,
          speed: this.speed
        }
      });
    }
  }
};
</script>
