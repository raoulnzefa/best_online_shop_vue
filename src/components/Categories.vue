<template>
    <div class="categories">
        <button class="categories__button" @click="pickedCategory('andrPhone')">
            Phone android
        </button>
        <button class="categories__button" @click="pickedCategory('iOSPhone')">
            iPhones
        </button>
        <button class="categories__button" @click="pickedCategory('other')">
            Other
        </button>
    </div>
</template>

<script>
    export default {
        name: "Categories",
        methods: {
            pickedCategory(cat){
                this.$store.commit({
                    type: 'updateCategory',
                    amount: cat
                });
                this.$store.commit('updateCategoryPicking', false);
                this.$router.push({
                    name: 'category',
                    params: {name: cat},
                })
            }

        }
    }
</script>

<style scoped>

</style>