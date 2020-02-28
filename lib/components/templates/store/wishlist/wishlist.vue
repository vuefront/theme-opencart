  <template>
  <section class="wishlist">
    <vf-a-heading :level="1" tag="h6" class="mb-2 font-weight-400">My Wishlist</vf-a-heading>

    <div class="wishlist__products" v-if="wishlist.length > 0">
      <vf-m-table :fields="fields" :items="wishlist" class="table-wishlist">
        <template #product="data">
          <vf-m-product-thumb-inline :product="data.item" />
        </template>
        <template #action="data">
          <vf-o-wishlist-actions :product="data.item" />
        </template>
      </vf-m-table>
    </div>
    <div v-else>
      <p>Your wishlist is empty.</p>
      <vf-a-button to="/">Continue shopping</vf-a-button>
    </div>
  </section>
</template>
<script>
import { tStoreWishlist } from "vuefront/lib/components/templates/store/wishlist";
export default {
  mixins: [tStoreWishlist]
};
</script>
<style lang="scss">
.wishlist {
  &__action {
    cursor: pointer;
  }
}
</style>
