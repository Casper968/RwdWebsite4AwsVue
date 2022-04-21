<template>
  <header-section></header-section>
  <!-- <div style="height:20px; width:100%;" v-on:click="clearData()">a</div> -->
  <weather-table :cellInfo="this.computedWeatherCellDatas" :key="TableKey"></weather-table>
</template>

<script>
import { /*computed, ref, */reactive } from 'vue';
import HeaderSection from './components/Homepage/HeaderSection.vue';
import WeatherTable from "./components/Homepage/WeatherTable.vue";
import CityDataJson from './json/CityData.json'

// import uniqueId from "lodash.uniqueid";
export default {
  name: "App",
  components: {
    HeaderSection, 
    WeatherTable
  },
  methods: {
    sortByChange(option) {
      console.log(`sort by change event: ${option}`);
      switch (option) {
        case 0:
          // sort by city
          this.sortByCity();
          break;
        case 2:
          // sort by time
          this.sortByTime();
          break;
        case 6:
          // sort by temp
          this.sortByTemp();
          break;
        default:
          break;
      }
    },
    sortByCity() {},
    sortByTime() {},
    sortByTemp() {},
  },
  computed: {
    computedWeatherCellDatas: { 
      get() {
        return this.WeatherCellDatas;
      },
      set(v) {
        this.TableKey++;
        this.WeatherCellDatas = v;
      }
    }
  },
  data() {
    return {
      TableKey: 0,
      WeatherCellDatas: CityDataJson.entire,
      Sort: 6
    };
  },
  provide() {
    return {
      sort: reactive(() => this.Sort) // this.sortOption
    }
  },
  beforeMount() {
    this.computedWeatherCellDatas = CityDataJson.entire.filter(cell => CityDataJson.most_popular.includes(cell.city))
  },
  mounted() {
    this.eventBus.on('search-form-sort-option-change', (option) => {
      console.log(`search-form-sort-option-change: ${option}`);
      // this.sortByChange(option);
    });
  }
};
</script>