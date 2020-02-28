<template>
  <b-card class="vf-m-card" :no-body="noBody" :body-bg-variant="bodyBgColor">
    <slot></slot>
  </b-card>
</template>

<script>
import { mCard } from "vuefront/lib/components/molecules/card";
export default {
  mixins: [mCard]
};
</script>
<style lang="scss">
//BUGFIX
//need to refactor the styles so that I don't override border-radius.
.vf-m-card {
  border-radius: 0px;
  border: 1px solid #ddd;
  .card-img {
    border-radius: 0px;
  }
}
</style>