<template>
  <vf-m-card class="vf-m-post-thumb" no-body>
    <vf-a-link :to="url" class="vf-m-post-thumb__image_wrapper">
      <vf-m-post-thumb-image :post="post" card />
    </vf-a-link>
    <vf-m-card-body class="pt-0">
      <vf-a-heading tag="h3" level="6" class="mb-0 vf-m-post-thumb__title">{{ post.title }}</vf-a-heading>
      <div v-html="post.shortDescription" class="vf-m-post-thumb__description text-sm mb-3"></div>
    </vf-m-card-body>
  </vf-m-card>
</template>
<script>
import "./post-thumb.scss";
import { mPostThumb } from "vuefront/lib/components/molecules/post-thumb";
export default {
  mixins: [mPostThumb]
};
</script>