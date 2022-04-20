<template>
  <header class="bn-header bn-header--weather">
    <div class="row socrow">
      <div id="bc" class="fixed">
        <div id="bct">
          <a target="_top" href="https://www.timeanddate.com/" class="fx" >Home</a >
          &nbsp; Weather
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="bn-header__title-flex">
        <div class="bn-header__title-wrap">
          <h1 class="bn-header__title">
            World Temperatures &mdash; Weather Around The World
          </h1>
          <p class="bn-header__brief">
            Forecast for today, tomorrow, next 14 days, and much more...
          </p>
        </div>
        <form action="/weather/" class="bn-header__searchbox picker-city noprint" >
          <input type="search" autocomplete="off" class="picker-city__input" placeholder="Search for city or place…" onfocus='ifc(this,&apos;ci&apos;,1,5,{"pre":"/weather/"})' name="query" />
          <button type="submit" class="picker-city__button" title="Search">
            <i class="i-font i-search"></i>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    // to do
  },
  methods: {
    // to do
  },
  computed: {
    // to do
  },
  data() {
    // to do
  },
};
</script>