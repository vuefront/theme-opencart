<template>
  <vf-m-card :class="{'vf-m-product-thumb_wide' : wide}" class="vf-m-product-thumb" no-body>
    <vf-m-row no-gutters>
      <vf-m-col :md="wide ? 3 : 12" class="px-4">
        <vf-a-link :to="url" class="vf-m-product-thumb__image_wrapper">
          <vf-m-product-thumb-image :product="product" card />
        </vf-a-link>
      </vf-m-col>
      <vf-m-col :md="wide ? 9 : 12">
        <vf-m-card-body class="pt-0">
          <vf-a-heading tag="h3" level="6" class="mb-0 vf-m-product-thumb__name">{{ product.name }}</vf-a-heading>
          <vf-m-rating
            v-if="product.rating > 0 && wide"
            :value="product.rating"
            color="#ffcc00"
            readonly
          />
          <div
            v-html="product.shortDescription"
            class="vf-m-product-thumb__description text-sm mb-3"
          ></div>
          <vf-m-product-price variant="small" :price="product.price" :special="product.special" />
        </vf-m-card-body>
        <vf-m-button-group size="sm" block>
          <vf-a-button color="light-gray" class="border-radius-top-left-0" @click="handleAddToCart">
            <vf-a-icon :icon="['fas', 'shopping-cart']" />
            {{$t('elements.store.product.buttonAddToCart')}}
          </vf-a-button>
          <vf-a-button
            color="light-gray"
            class="border-radius-top-left-0"
            @click="handleAddToWishlist"
          >
            <vf-a-icon :icon="['fas', 'heart']" />
          </vf-a-button>
          <vf-a-button
            color="light-gray"
            class="border-radius-top-left-0"
            @click="handleAddToCompare"
          >
            <vf-a-icon :icon="['fas', 'exchange-alt']" />
          </vf-a-button>
        </vf-m-button-group>
      </vf-m-col>
    </vf-m-row>
  </vf-m-card>
</template>
<script>
import { mProductThumb } from "vuefront/lib/components/molecules/product-thumb";
export default {
  mixins: [mProductThumb]
};
</script>
<style lang="scss">
.vf-m-price__special + span {
  color: #999;
  padding-left: 15px;
}
.vf-m-product-thumb {
  &__name.h6 {
    color: #23a1d1;
    justify-content: left;
  }
  .vf-m-button-group {
    border-radius: 0px;
    border: none;
    border-top: 1px solid #ddd;
    > .btn {
      border-radius: 0px;
      border-left: 1px solid #ddd;
      &:first-child {
        border-left: none;
      }
    }
  }
  &_wide {
    .vf-m-button-group > .btn:first-child {
      border-left: 1px solid #ddd;
    }
  }
}
</style>