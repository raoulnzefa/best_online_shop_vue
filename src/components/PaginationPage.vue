<template>
    <div class="pagination">

        <router-link
                :to="paginateObject(currentPage - 1)"
                class="pagination__prev"
                :class="{disabled: currentPage <= 1}" >
            &lt;&lt; Prev
        </router-link>
        <p>
            Страница {{currentPage}} из {{getAllPagesNumber}}
        </p>
        <router-link
                :to="paginateObject(currentPage + 1)"
                :class="{disabled:!getHasNextPage}"
                class="pagination__next">
            Next >>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "PaginationPage",
        props:{
            getHasNextPage: Boolean,
            getAllPagesNumber: Number,
            currentPage: Number,
            updatePage: String
        },
        mounted(){
            const pageNum = this.$route.query['page'];
            if(pageNum){
                this.$store.commit(this.updatePage, {count: +pageNum})
            }
        },
        methods: {
            paginateObject(pageTo) {
                return {
                    query: {
                        ...this.$route.query,
                        page: pageTo,
                    },
                };
            },
        },
        watch: {
            '$route.query.page'(to){
                this.$store.commit(this.updatePage, {count: +to || 1})
            },
            currentPage(){
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }

    }
</script>

<style lang="scss">
        .pagination{
            .disabled{
                pointer-events: none;
                opacity: .5;
            }

        }
</style>