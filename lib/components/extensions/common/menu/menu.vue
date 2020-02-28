<template>
  <section class="vf-e-common-menu vf-e-common-menu--opencart">
    <div class="vf-e-common-menu__item" v-for="(item, index) in menuItems" :key="index">
      <vf-a-link :to="item.to" class="vf-e-common-menu__link">
        <div class="vf-e-common-menu__title" v-b-toggle.menu-collapse>{{item.title}}</div>
        <vf-a-icon
          icon="angle-down"
          v-if="item.children && item.children.length > 0"
          class="vf-e-common-menu__icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="vf-e-common-menu__submenu vf-e-common-menu__submenu--vertical"
        :class="[ ( item.children.length > 5 && item.children.length <= 10 ? 'vf-e-common-menu__submenu--two-columns' : ''), (item.children.length > 10 ? 'vf-e-common-menu__submenu--three-columns': '' ) ]"
      >
        <div class="vf-e-common-menu__item" v-for="(subItem, key) in item.children" :key="key">
          <vf-a-link
            :to="subItem.to"
            class="vf-e-common-menu__link vf-e-common-menu__link--lg"
            v-b-toggle.menu-collapse
          >
            <div class="vf-e-common-menu__title">
              {{subItem.title}}
              <span v-if="subItem.children.length">({{ subItem.children.length }})</span>
            </div>
            <vf-a-icon
              v-if="subItem.children.length > 0"
              icon="angle-right"
              class="vf-e-common-menu__icon vf-e-common-menu__icon--float"
            />
          </vf-a-link>
          <div
            v-if="subItem.children.length > 0"
            class="vf-e-common-menu__submenu vf-e-common-menu__submenu--horizontal"
          >
            <div
              class="vf-e-common-menu__item"
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              v-b-toggle.menu-collapse
            >
              <vf-a-link :to="value.to" class="vf-e-common-menu__link vf-e-common-menu__link--md">
                <div class="vf-e-common-menu__title">{{value.title}}</div>
              </vf-a-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { eMenu } from "vuefront/lib/components/extensions/common/menu";
export default {
  mixins: [eMenu]
};
</script>
