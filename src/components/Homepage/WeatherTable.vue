<template>
    <section class=fixed>
        <div class=row>
            <div class=tb-scroll>
                <table class="zebra fw tb-theme">
                    <search-form></search-form>
                    <tbody>
                        <tr v-for="row in cellRow" :key="row.rowId">
                            <weather-cell v-for="cell in row.cells" :key="cell.city" :city="cell.city" :icon="cell.icon" :time="cell.date" :temp="cell.temp"></weather-cell>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
<script>
    import uniqueId from "lodash.uniqueid";
    import SearchForm from "./SearchForm.vue";
    import WeatherCell from "./WeatherCell.vue";
    export default {
        props: {
            cellInfo: { required: true, default: [], type: [] },
            rowCellCount: { required: false, default: 3, type: Number },
        },
        components: {
            SearchForm,
            WeatherCell
        },
        methods: {
        },
        computed: {
            // to do
        },
        data() {
            return {
                cellRow : []
            }
        },
        beforeMount() {
            let currentRow = {'rowId': '', 'cells': []};
            this.cellInfo.forEach((cell, index) => {
                if (index % this.rowCellCount === 0) {
                    currentRow = {'rowId': uniqueId('rowId-'), 'cells': []};
                }
                currentRow.cells.push(cell);
                if (currentRow.cells.length === 3) {
                    this.cellRow.push(currentRow);
                }
            });
            if (currentRow.cells.length > 0 && currentRow.cells.length < this.rowCellCount) {
                this.cellRow.push(currentRow);
            }
        }
};
</script>