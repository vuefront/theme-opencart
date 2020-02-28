<template>
  <section class="vf-o-header">
    <div class="vf-o-header__top">
      <vf-m-container>
        <vf-m-row>
          <vf-m-col align-self="center" class="text-sm-left">
            <vf-o-currency />
            <vf-o-language />
          </vf-m-col>
          <vf-m-col align-self="center" class="text-sm-right">
            <vf-m-compare-link class="ml-auto" />
            <vf-m-wishlist-link />
            <vf-a-link to="/store/cart">{{$t('elements.common.header.nav.shoppingCartText')}}</vf-a-link>
            <vf-m-account-menu />
          </vf-m-col>
        </vf-m-row>
      </vf-m-container>
    </div>
    <div class="vf-o-header__center">
      <vf-m-container>
        <vf-m-row>
          <vf-m-col md="4" class="text-md-left" align-self="center">
            <vf-m-logo />
          </vf-m-col>
          <vf-m-col md="5" align-self="center">
            <vf-o-search-inline-form class="mx-auto" />
          </vf-m-col>
          <vf-m-col md="3" class="text-md-right" align-self="center">
            <vf-m-cart-link />
          </vf-m-col>
        </vf-m-row>
      </vf-m-container>
    </div>
    <div class="vf-o-header__bottom">
      <vf-m-container>
        <vf-o-position name="headerMenu" />
      </vf-m-container>
    </div>
  </section>
</template>
<script>
import { oHeader } from "vuefront/lib/components/organisms/header";
export default {
  mixins: [oHeader]
};
</script>

<style lang="scss">
.vf-o-header {
  &__top {
    background: #eee;
    border-bottom: 1px solid #e2e2e2;
    padding: 8px 0px;
    margin-bottom: 20px;
    font-size: 14px;
  }
  //BUGFIX
  //need to refactor the styles so they force font-size on dropdown from bootstrap.
  //http://joxi.ru/1A5x8qjFDpvVj2
  .dropdown {
    > .btn.btn-link,
    > .btn.btn-link:hover {
      font-size: 14px;
    }
  }
  &__center {
    margin-bottom: 20px;
  }
}
</style>

