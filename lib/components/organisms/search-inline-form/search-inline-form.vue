<template>
  <vf-m-input-group class="vf-o-search-inline-form vf-o-search-inline-form--opencart">
    <vf-a-input
      v-model="keyword"
      :placeholder="$t('elements.common.header.navSearch.placeholderText')"
      :hide-details="!$vuefront.isAMP"
      @keypress.stop="handleKeyPress"
      trim
    />
    <template v-slot:append>
      <vf-a-button color="primary" @click="doSearch">
        <vf-a-icon icon="search" />
      </vf-a-button>
    </template>
  </vf-m-input-group>
</template>
<script>
import { oSearchInlineForm } from "vuefront/lib/components/organisms/search-inline-form";
export default {
  mixins: [oSearchInlineForm]
};
</script>
<style lang="scss">
.vf-o-search-inline-form--opencart {
  .vf-a-input,
  .vf-a-button {
    padding: 10px 25px !important;
    font-size: 12px !important;
    height: 40px;
  }
}
</style>