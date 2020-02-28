<template>
  <div class="vf-m-cart-link vf-m-cart-link--opencart">
    <vf-a-button size="sm" color="dark" block to="/store/cart">
      <vf-a-icon icon="shopping-cart" />
      <span class="d-none d-md-inline-block">{{$t('elements.common.header.nav.shoppingCartText')}}</span>
    </vf-a-button>
  </div>
</template>
<script>
import { mCartLink } from "vuefront/lib/components/molecules/cart-link";
export default {
  mixins: [mCartLink]
};
</script>
<style lang="scss">
.vf-m-cart-link--opencart {
  .vf-a-button {
    padding: 10px 25px;
    font-size: 12px;
  }
}
</style>