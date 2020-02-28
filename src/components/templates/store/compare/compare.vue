<template>
  <section class="compare">
    <vf-a-heading :level="1" tag="h6" class="mb-2 font-weight-400">Product Comparison</vf-a-heading>
    <div v-if="compare.length > 0">
      <vf-m-table-horizontal :fields="fields" :items="compare">
        <template #image="data">
          <vf-m-product-thumb-image :product="data" width="80" height="80" />
        </template>
        <template #price="data">
          <vf-m-product-price :price="data.price" :special="data.special" variant="small" />
        </template>
        <template #stock="data">
          <div v-if="data.stock">{{$t('elements.store.compare.inStockText')}}</div>
          <div v-else>{{$t('elements.store.compare.outOfStockText')}}</div>
        </template>
        <template #rating="data">
          <vf-m-rating :value="data.rating" color="#ffcc00" readonly />
        </template>
        <template #actions="data">
          <vf-o-compare-actions :product="data" />
        </template>
      </vf-m-table-horizontal>
    </div>
    <div v-else>
      <p>You have not chosen any products to compare</p>
      <vf-a-button to="/">Continue shopping</vf-a-button>
    </div>
  </section>
</template>
<script>
import { tStoreCompare } from "vuefront/lib/components/templates/store/compare";
export default {
  mixins: [tStoreCompare]
};
</script>
