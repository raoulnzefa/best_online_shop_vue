import { createStore } from 'vuex'
//import createPersistedState from 'vuex-persistedstate';
import GoodsService from '../services/GoodsService';
const goodsService = new GoodsService();
const goodsPerPage = 3;

export default createStore({
  //plugins: [createPersistedState()],
  state: {
    goods: [],
    searchFieldValue: '',
    pickedCategory: '',
    searching: false,
    categoryPicking: false,
    cart: [],
    foundGoods:[],
    selectedGood: null,
    currentPage: 1
  },
  mutations: {
      loadGoods(state, payload){
        state.goods = payload.amount;
    },
    updateSearchValue(state, payload){
        state.searchFieldValue = payload.amount;
    },
    clearAll(state){
      state.searchFieldValue = ''
      state.pickedCategory = ''
      state.searching = false
      state.categoryPicking = false


    },
    updateSearch(state, payload){
      state.searching = payload.amount;
    },
    updateCategoryPicking(state, payload){
      state.categoryPicking = payload.amount;
    },
    updateCategory(state, payload){
        state.pickedCategory = payload.amount;
    },
    updateCartCount(state, payload){

        state.cart = state.cart.map(el => {
          if(el.id === payload.amount.id){
            return {
              ...el,
              count: el.count + payload.amount.count
            }
          }
          return el;
        })
    },
    addToCart(state, payload){
        const ifExist = state.cart.filter(el => el.id === payload.amount.id);

        if(ifExist.length){
          state.cart = state.cart.map(el => {
            if(el.id === payload.amount.id){
              return {
                ...el,
                count: el.count + payload.amount.count
              }
            }
            else{
              return el;
            }

          })

        }
        else{
          state.cart.push(payload.amount);
        }

    },
    removeFromCart(state, payload){
        state.cart = state.cart.filter(el => el.id !== payload.amount)
    },
    updateSelectedGood(state, payload){

      state.selectedGood = payload.amount[0];
    },
    updatePageNumber(state, payload){
        console.log(payload.count);
        state.currentPage += payload.count;
    },
    setPageNumber(state, payload){
      state.currentPage = payload.count;
    }

  },
  getters: {
    getGoods(state){
      return state.goods;
    },
    getCategorizedGoods(state){
      return state.goods.filter(el => el.kategoriya.toLowerCase().includes(state.pickedCategory.toLowerCase()));
    },
    getFoundGoods(state){
      return state.goods.filter(el => el.name.toLowerCase().includes(state.searchFieldValue.toLowerCase()));
    },
    getCartSum(state){
      return state.cart.reduce((summ, el) => summ = summ + (el.price*el.count), 0)
    },
    getCart(state){
      return state.cart;
    },
    pageStart(state){
      return (state.currentPage - 1)*goodsPerPage;
    },
    pageEnd(state, getters){
      return getters.pageStart + goodsPerPage;
    },
    getGoodsForPage(state, getters){
      return state.goods.slice(getters.pageStart, getters.pageEnd)
    },
    getHasNextPage(state, getters){
      return getters.pageEnd < getters.getGoods.length
    },
    getAllPagesNumber(state, getters){

      return Math.ceil(getters.getGoods.length / goodsPerPage)
    }
  },
  actions: {
    loadAllGoods({commit}){
      goodsService.getAllGoods().then(data => {
        commit({
          type: 'loadGoods',
          amount: data
        });
      })
    },

    loadSelectedGood({ commit, state}, {amount}){
      state.selectedGood = null
      goodsService.getSelectedGood(amount).then(data => {
        console.log(data);
        commit({
          type: 'updateSelectedGood',
          amount: data
        });
      })
    }

  },
  modules: {
  }
})
