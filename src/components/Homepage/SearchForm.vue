<template>
  <thead>
    <tr>
      <th colspan="12">
        <h3 class="tb-header">Local Time and Weather Around the World</h3>
        <div class="tb-show">
          <label for="sort">Sort By: </label>
          <select id="sort" name="sort" @change="onSortChange($event)">
            <option value="0" :selected="this.sort == 0 ? true : false">
              City
            </option>
            <option value="2" :selected="this.sort == 2 ? true : false">
              Time
            </option>
            <option value="6" :selected="this.sort == 6 ? true : false">
              Temperature
            </option>
          </select>
        </div>
        <div class="tb-show mgr10">
          <label for="pop">Cities Shown: </label>
          <select id="pop" name="low" onchange="this.form.submit();">
            <option value="c">Capitals</option>
            <option value="6" selected>Most Popular</option>
            <option value="5">Popular</option>
            <option value="4">Somewhat Popular</option>
          </select>
        </div>
      </th>
    </tr>
  </thead>
</template>
<script>
export default {
  inject: ["sort", "global_config"],
  props: {
    // to do
  },
  methods: {
    onSortChange(event) {
      // console\.log(`option: ${event.target.value}`);
      this.sort = event.target.value;
      this.eventBus.emit("search-form-sort-option-change", this.sort);
    },
  },
  computed: {
    // to do
  },
  data() {
    return {};
  },
  beforeMount() {
    // console\.log(`print local sort: ${this.sort}`);
    // console\.log(`print global provide info: ${this.global_config.dark_mode}`);
  },
};
</script>