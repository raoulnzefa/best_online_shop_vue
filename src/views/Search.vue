<template>
    <h2>
        We have found 100 results
    </h2>
    <GoodItem
            v-for="good in loadGoods"
            :key="good.id"
            :good="good"
    ></GoodItem>
</template>

<script>
    import GoodItem from '../components/GoodItem';
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: "Search"
    }
</script>

<style scoped>

</style>