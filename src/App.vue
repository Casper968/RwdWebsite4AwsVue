<template>
  <header-section></header-section>
</template>

<script>
import HeaderSection from './components/Homepage/HeaderSection.vue';

// import uniqueId from "lodash.uniqueid";
// import ToDoItem from "./components/Homepage/HeaderSection.vue";
export default {
  name: "App",
  components: {
    HeaderSection
  },
  methods: {
  },
  computed: {
  },
  data() {
    return {
      ToDoItems: [
      ],
    };
  },
};
</script>