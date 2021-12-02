<template>

    <div>
        <GoodItem
                v-for="good in goods"
                :key="good.id"
                :good="good"
        ></GoodItem>
    </div>
</template>

<script>
    // @ is an alias to /src
    //import GoodsService from '../services/GoodsService';
    import GoodItem from '../components/GoodItem';
    import { mapGetters } from 'vuex';
    export default {
        name: 'GoodHolder',
        props:['goods'],
        components: {
            GoodItem
        },
        computed: {

            ...mapGetters({
                loadGoods: 'getGoods'
            })

        }


    }
</script>

<style scoped>

</style>