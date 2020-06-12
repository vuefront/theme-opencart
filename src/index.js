export default {
    root: {
        components: '@vuefront/theme-opencart/lib/components'
    },
    css: {
        bootstrap: '@vuefront/theme-opencart/assets/scss/bootstrap.scss',
        theme: '@vuefront/theme-opencart/assets/scss/theme.scss',
        eCommonMenuOC: '@vuefront/theme-opencart/lib/components/extensions/common/menu/menu.scss',
        mProductThumbOC: '@vuefront/theme-opencart/lib/components/molecules/product-thumb/product-thumb.scss',
        mPostThumbOC: '@vuefront/theme-opencart/lib/components/molecules/post-thumb/post-thumb.scss',
        mButtonGroupOC: '@vuefront/theme-opencart/lib/components/molecules/button-group/button-group.scss',
        mTableHorizontalOC: '@vuefront/theme-opencart/lib/components/molecules/table-horizontal/table-horizontal.scss',
        oFooterOC: '@vuefront/theme-opencart/lib/components/organisms/footer/footer.scss'
    },
    molecules: {
        CartLink: 'molecules/cart-link/cart-link.vue'
    },
    organisms: {
        SearchInlineForm: 'organisms/search-inline-form/search-inline-form.vue',
        Header: 'organisms/header/header.vue'
    }
}