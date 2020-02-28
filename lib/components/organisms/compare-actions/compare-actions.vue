<template>
  <div class="vf-m-compare-actions">
    <vf-a-button
      class="compare__action cursor-pointer m-1 d-inline"
      @click="handleAddToCart"
      size="sm"
      color="primary"
    >
      <vf-a-icon :icon="['fas', 'shopping-cart']" />
      {{$t('elements.store.product.buttonAddToCart')}}
    </vf-a-button>
    <vf-a-button
      class="compare__action cursor-pointer m-1 ml-2 d-inline"
      @click="handleRemove"
      size="sm"
      color="danger"
    >
      <vf-a-icon icon="times" />
      {{'Remove'}}
    </vf-a-button>
  </div>
</template>
<script>
import { oCompareActions } from "vuefront/lib/components/organisms/compare-actions";
export default {
  mixins: [oCompareActions]
};
</script>