<template>
  <thead>
    <tr>
      <th colspan="12">
        <h3 class="tb-header">Local Time and Weather Around the World</h3>
        <div class="tb-show">
          <form
            id="wc-sort"
            name="wc-sort"
            class="inline"
            action="/scripts/gowc.php"
            aria-hidden="true"
            method="get"
          >
            <label for="sort">Sort By: </label>
            <select id="sort" name="sort" onchange="this.form.submit()">
              <option value="0" selected>City</option>
              <option value="1">Country</option>
              <option value="2">Time</option>
              <option value="6">Temperature</option>
            </select>
            <input type="hidden" name="url" value="/weather/" />
            <input type="hidden" name="args" value="" />
          </form>
        </div>
        <div class="tb-show mgr10">
          <form
            id="wc-shown"
            name="wc-shown"
            class="inline"
            action="/scripts/gowc.php"
            aria-hidden="true"
            method="get"
          >
            <label for="pop">Cities Shown: </label>
            <select id="pop" name="low" onchange="this.form.submit();">
              <option value="c">Capitals (215)</option>
              <option value="6" selected>Most Popular (143)</option>
              <option value="5">Popular (356)</option>
              <option value="4">Somewhat Popular (469)</option>
            </select>
            <input type="hidden" name="url" value="/weather/" />
            <input type="hidden" name="args" value="" />
          </form>
        </div>
      </th>
    </tr>
  </thead>
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