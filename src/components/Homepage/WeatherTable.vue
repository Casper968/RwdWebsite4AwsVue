<template>
    <section class=fixed>
        <div class=row>
            <div class=tb-scroll>
                <table class="zebra fw tb-theme">
                    <search-form></search-form>
                    <tbody>
                        <tr>
                            <weather-cell></weather-cell>
                            <weather-cell></weather-cell>
                            <weather-cell></weather-cell>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
<script>
    import SearchForm from "./SearchForm.vue";
    import WeatherCell from "./WeatherCell.vue";
    export default {
        props: {
            // to do
        },
        components: {
            SearchForm,
            WeatherCell
        },
        methods: {
            // to do
        },
        computed: {
            // to do
        },
        data() {
            // to do
        }
};
</script>