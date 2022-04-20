<template>
  <header-section></header-section>
  <!-- <div style="height:20px; width:100%;" v-on:click="clearData()">a</div> -->
  <weather-table :cellInfo="this.computedWeatherCellDatas" :key="TableKey"></weather-table>
</template>

<script>
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
    // clearData() {
    //   this.computedWeatherCellDatas = this.WeatherCellDatas469;
    // }
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
      WeatherCellDatas: CityDataJson.entire
    };
  },
  beforeMount() {
    this.computedWeatherCellDatas = CityDataJson.entire.filter(cell => CityDataJson.most_popular.includes(cell.city))
  }
};
</script>