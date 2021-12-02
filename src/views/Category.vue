<template>
    <div class="category">
        <GoodHolder :goods="goods"></GoodHolder>
    </div>
</template>

<script>
    import GoodHolder from '../components/GoodHolder';
    import {mapGetters} from 'vuex';

    export default {
        name: "Category",
        components: {
            GoodHolder
        },
        props: ['name'],
        created(){
            console.log(this.name);
            this.$store.commit({
                type: 'updateCategory',
                amount: this.name
            });
            this.$store.dispatch('loadAllGoods')
        },
        // watch: {
        //     '$route' (){
        //         this.$store.commit('clearAll');
        //     }
        // },
        computed: {
            ...mapGetters({
                goods: 'getCategorizedGoods'
            })
        }
    }
</script>

<style lang="scss">
    .category{
        margin: 150px 0 0;
    }
</style>