<template>
  <div
    :is="nav? 'b-nav-item-dropdown': 'b-dropdown'"
    :variant="variant"
    :right="right"
    :size="size"
  >
    <template slot="button-content">
      <slot name="button-content"></slot>
    </template>
    <slot></slot>
  </div>
</template>
<script>
import { mDropdown } from "vuefront/lib/components/molecules/dropdown";
export default {
  mixins: [mDropdown]
};
</script>
<style lang="scss">
//BUGFIX
//need to refactor the styles so they don't force hover styles on dropdown from bootstrap.

.vf-o-header {
  a.dropdown-item {
    padding-left: 15px;
  }
  a.dropdown-item:hover {
    text-shadow: none;
    color: #ffffff;
    background-color: #229ac8;
    background-image: linear-gradient(to bottom, #23a1d1, #1f90bb);
    background-repeat: repeat-x;
    padding-left: 15px;
  }
}
</style>