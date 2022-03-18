<template>
  <tab-content :tabList="state.language"></tab-content>
</template>

<script>
import TabContent from "@/components/TabContent.vue";
import { reactive } from "vue";
export default {
  name: "HomeView",
  components: { TabContent },
  setup() {
    const state = reactive({
      language: [
        { lang: "en", title: "English" },
        { lang: "fr", title: "French" },
        { lang: "de", title: "German" },
      ],
    });

    return {
      state,
    };
  },
};
</script>
