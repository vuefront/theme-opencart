<template>
  <div class="post-module-section mb-5" v-if="items.length > 0">
    <vf-a-heading level="4" class="post-module-section__title mb-2">
      <slot></slot>
    </vf-a-heading>
    <vf-o-post-grid class="post-module-section__items" :posts="items" :column="column" />
  </div>
</template>
<script>
import { oPostModule } from "vuefront/lib/components/organisms/post-module";
export default {
  mixins: [oPostModule]
};
</script>