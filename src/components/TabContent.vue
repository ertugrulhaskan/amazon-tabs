<template>
  <div class="min-w-[420px] bg-white shadow-md">
    <div class="tab-wrapper flex justify-between">
      <a
        @click.prevent="changeLanguage"
        v-for="(item, idx) in props.tabList"
        :key="`tab-${idx}`"
        :href="`#${item.lang}`"
        class="grow items-center bg-light-green py-2 px-4 text-center font-light text-white"
        :class="[false ? 'active' : null]"
      >
        {{ item.title }}
      </a>
    </div>
    <div class="tab-content-wrapper p-5">
      <div
        v-for="(item, idx) in props.tabList"
        :key="`tab-${idx}`"
        :id="`${item.lang}`"
      >
        {{ selectedLanguage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import English from "@/assets/locales/en.json";
import French from "@/assets/locales/fr.json";
import German from "@/assets/locales/de.json";

export default {
  name: "TabContent",
  props: {
    tabList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const selectedLanguage = ref(props.tabList[0].lang);

    console.log(English);
    console.log(French);
    console.log(German);

    function changeLanguage() {
      console.log("test");
    }
    return {
      props,
      selectedLanguage,
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
