<template>
  <div class="min-w-[420px] bg-white shadow-md">
    <div class="tab-wrapper flex justify-between">
      <a
        @click.prevent="changeLanguage(item.lang)"
        v-for="(item, idx) in props.tabList"
        :key="`tab-${idx}`"
        :href="`#${item.lang}`"
        class="grow items-center bg-light-green py-2 px-4 text-center font-light text-white"
        :class="locale === item.lang ? 'active' : null"
      >
        {{ item.title }}
      </a>
    </div>
    <div class="tab-content-wrapper p-5">
      <div>
        {{ $t("content") }}
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "TabContent",
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { locale } = useI18n({ useScope: "global" });

    function changeLanguage(lang) {
      locale.value = lang;
      localStorage.setItem("i18nextLng", lang);
    }

    onMounted(() => {
      localStorage.setItem("i18nextLng", locale.value);
    });

    return {
      props,
      locale,
      changeLanguage,
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  &.active {
    @apply relative -mt-2 border-t-2 border-light-green bg-white pt-2 font-normal text-dark-gray;
  }
}
</style>
