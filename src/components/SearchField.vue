<template>
    <form action="#" id="form-search">
        <input type="text"
               placeholder="Enter something to search..."
               @input="updateSearchField"
               :value="searchFieldValue" >

        <div class="search-modal" v-if="searchFieldValue">
            <template v-if="getFoundGoods.length">
                <SearchResultsModal
                        v-for="good in getFoundGoods"
                        :key="good.id"
                        :good="good"
                        :query="searchFieldValue"
                ></SearchResultsModal>
            </template>
            <p v-else>
                Cant find anything
            </p>

        </div>

    </form>
</template>

<script>

    import {mapState, mapGetters} from 'vuex';
    import SearchResultsModal from '../components/SearchResultsModal';

    export default {
        name: "SearchField",
        components: {
            SearchResultsModal
        },

        methods: {
            updateSearchField(e){
                this.$store.commit({
                    type: 'updateSearchValue',
                    amount: e.target.value
                })
            }
        },
        computed: {
            ...mapState({
                searchFieldValue: 'searchFieldValue'
            }),
            ...mapGetters([
                'getFoundGoods'
            ])
        }

    }
</script>

<style lang="scss">
    #form-search{
        background: lightgoldenrodyellow;
        width: 100%;
        height: 70px;
        padding: 0 20px;
        margin: 20px 0 0 ;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        input{
            width: 100%;
            height: 30px;
            padding: 0 20px;
        }
        .search-modal {
            width: 100%;
            max-width: 500px;
            position: absolute;
            background: lightcoral;
            top: 100%;
            left: 0;
            padding: 20px;
        }
    }
</style>