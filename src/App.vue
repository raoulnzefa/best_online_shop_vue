<template>
  <header id="header">
    <div class="wrapper">
      <strong class="header__logo">
        <a  href="#" @click.prevent="handleLogoClick">
          NewbeeStore
        </a>
      </strong>

      <div class="header__controls">
        <button @click="toggleSlideBlock('searching')">
          <i class="fas fa-2x" :class="[searching ? 'fa-times' : 'fa-search-dollar']"></i>
        </button>
        <router-link to="/cart" class="header__btn-cart" :class="[cart.length ? 'header__cart-exist' : null]">
          <p>
            {{cart.length}}
          </p>
          <i class="fas fa-cart-plus fa-2x"></i>
        </router-link>
        <button @click="toggleSlideBlock('categoryPicking')">
          <i class="fas  fa-2x" :class="[categoryPicking ? 'fa-times' : 'fa-clipboard-list']"></i>
        </button>
      </div>
    </div>
    <keep-alive>
      <SearchField v-if="searching"></SearchField>
    </keep-alive>

    <Categories v-if="categoryPicking"></Categories>
  </header>

  <router-view/>
</template>

<script>
  //import GoodsService from './services/GoodsService';
  import SearchField from './components/SearchField'
  import Categories from './components/Categories'

  import {mapState} from 'vuex';

  export default {
    name: 'App',
    components: {
      SearchField,
      Categories
    },
    mounted(){
      this.$store.commit('clearAll');
    },
    methods: {
      toggleSlideBlock(nameToShow){
        this.$store.state[nameToShow] = !this.$store.state[nameToShow];

        nameToShow === 'searching' ?  this.$store.commit('updateCategoryPicking', false) : this.$store.commit('updateSearch', false);
      },
      handleLogoClick(){
        this.$store.commit('clearAll');
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState({
        searching: 'searching',
        categoryPicking: 'categoryPicking',
        cart: 'cart'
      })
    },


  }
</script>

<style lang="scss">
  @import 'normalize-scss';
  @include normalize();
  *{
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  background: lightgrey;

  .wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .header__logo{
    display: block;
    width: 30%;
    margin: 0 20px 0 0;
    text-align: left;
    a{
      font-size: 40px;
      font-weight: bold;
      text-decoration: none;
      color: black;
    }
  }
  .header__btn-cart{
    p{
      display: none;
    }
    &.header__cart-exist{
      position: relative;
      p{
        position: absolute;
        width: auto;
        min-width: 15px;
        height: 15px;
        background: red;
        color: #fff;
        font-size: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-radius: 50%;
        top:-9px;
        left: 13px;

      }
    }
  }
  .header__controls{
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
      color: #000;
      transition: color .3s;
    }
    button{
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
