<template>
  <div class="vf-o-wishlist-actions text-right">
    <vf-a-button size="sm" class="wishlist__action m-1 d-inline" @click="handleAddToCart">
      <vf-a-icon :icon="['fas', 'shopping-cart']" />
    </vf-a-button>
    <vf-a-button
      size="sm"
      color="danger"
      class="wishlist__action m-1 ml-2 d-inline"
      @click="handleRemove"
    >
      <vf-a-icon icon="times" />
    </vf-a-button>
  </div>
</template>
<script>
import { oWishlistActions } from "vuefront/lib/components/organisms/wishlist-actions";
export default {
  mixins: [oWishlistActions]
};
</script>
