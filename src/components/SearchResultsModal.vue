<template>
        <router-link  :to="{ name: 'good', params: { name: good.name.replace(/\s/gm, '-')} }">

            <img :src="good.image" alt="">
            <div class="search-modal__item-text">
                <p class="search-modal__name" v-html="getHighlightedName">

                </p>
                <p class="search-modal__go-to">
                    Go to >>
                </p>
            </div>
        </router-link>
</template>

<script>
    export default {
        name: "SearchResultsModal",
        props: {
            good: Object,
            query: String
        },
        computed: {
            getHighlightedName(){
                return this.$props.good.name.replace(new RegExp(this.$props.query, "gi"), match => {
                    return '<span class="highlightText">' + match + '</span>';
                });
            }
        }
    }
</script>

<style lang="scss">
    .search-modal{
        width: 100%;
        max-width: 500px;
        position: absolute;
        background: lightcoral;
        top: 100%;
        left: 0;
        padding: 20px;
        .highlightText{
            color: white;
        }
        a{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-decoration: none;
            border-bottom: 1px solid white;
            &:last-of-type{
                border-bottom: none;
            }
            img{
                width: 150px;
                height: auto;
                display: block;
                margin: 0 20px 0 0;
            }
            .search-modal__item-text{
                width: calc(100% - 150px);
                text-align: left;
                .search-modal__name{
                    font-size: 16px;
                    font-weight: bold;
                    margin: 0 0 20px;
                    color: gray;

                }
                .search-modal__go-to{
                    font-size: 16px;
                    color: blue;
                    text-decoration: underline;
                }
            }
        }
    }
</style>