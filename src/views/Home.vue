
<template>
  <div class="home">
    <template v-if="getGoodsForPage.length">
      <GoodHolder :goods="getGoodsForPage"></GoodHolder>
      <PaginationPage
              :getHasNextPage="getHasNextPage"
              :getAllPagesNumber="getAllPagesNumber"
              :currentPage="currentPage"
              :updatePage="'setPageNumber'"
      ></PaginationPage>
    </template>
    <p v-if="!getGoodsForPage.length && searchFieldValue">
      Nothing to show
    </p>
    <p v-else-if="!getGoodsForPage.length && !searchFieldValue">
      Loading...
    </p>
  </div>
</template>

<script>

import GoodHolder from '../components/GoodHolder';
import PaginationPage from '../components/PaginationPage';
import {mapGetters, mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
    GoodHolder,
    PaginationPage
  },
  created(){
    this.$store.dispatch('loadAllGoods')
  },
  computed: {
    ...mapGetters({
      goods: 'getGoods',
      getGoodsForPage: 'getGoodsForPage',
      getHasNextPage:'getHasNextPage',
      getAllPagesNumber:'getAllPagesNumber'
    }),
    ...mapState([
      'currentPage',
      'searchFieldValue'
    ])

  }
}
</script>

<style lang="scss">
  .home{
    margin: 150px 0;
  }
</style>
