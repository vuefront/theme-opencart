export default {
    root: {
        components: '@vuefront/opencart-theme/lib/components'
    },
    css: {
        bootstrap: '@vuefront/opencart-theme/assets/scss/bootstrap.scss',
        theme: '@vuefront/opencart-theme/assets/scss/theme.scss',
        eCommonMenuOC: '@vuefront/opencart-theme/lib/components/extensions/common/menu/menu.scss',
        mProductThumbOC: '@vuefront/opencart-theme/lib/components/molecules/product-thumb/product-thumb.scss',
        mPostThumbOC: '@vuefront/opencart-theme/lib/components/molecules/post-thumb/post-thumb.scss',
        mButtonGroupOC: '@vuefront/opencart-theme/lib/components/molecules/button-group/button-group.scss',
        mTableHorizontalOC: '@vuefront/opencart-theme/lib/components/molecules/table-horizontal/table-horizontal.scss',
        oFooterOC: '@vuefront/opencart-theme/lib/components/organisms/footer/footer.scss'
    },
    molecules: {
        CartLink: 'molecules/cart-link/cart-link.vue'
    },
    organisms: {
        SearchInlineForm: 'organisms/search-inline-form/search-inline-form.vue',
        Header: 'organisms/header/header.vue'
    }
}