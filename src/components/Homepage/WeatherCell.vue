<template>
    <td>
        <a href="https://www.timeanddate.com/weather/ghana/{{city}}">{{city}}</a>
        <span id=p0s class=wds></span>
    </td>
    <td id=p0 class=r>{{time}}</td>
    <td class=r>
        <img :src="formatIcon(icon)" alt="Clear. Mild." title="Clear. Mild." width=40 height=40></td>
    <td class=rbi>{{temp}}</td>
</template>
<script>
    export default {
        props: {
            city: { required: true, default: "Taiwan", type: String },
            time: { required: true, default: "Sun 00:00", type: String },
            icon: { required: true, default: "wt-1.svg", type: String},
            temp: { required: true, default: "24 °C", type: String }
        },
        methods: {
            formatIcon(icon) {
                if (icon) {
                    return "//c.tadst.com/gfx/w/svg/" + icon;
                }
            },
        },
        computed: {
            // to do
        },
        data() {
            return {
                
            }
        }
};
</script>