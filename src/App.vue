<template>
  <header-section></header-section>
  <weather-table></weather-table>
</template>

<script>
import HeaderSection from './components/Homepage/HeaderSection.vue';
import WeatherTable from "./components/Homepage/WeatherTable.vue";

// import uniqueId from "lodash.uniqueid";
export default {
  name: "App",
  components: {
    HeaderSection, 
    WeatherTable
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