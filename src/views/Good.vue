<template>


    <div class="good" v-if="selectedGood">

        <img :src="selectedGood.image" alt="">
        <div class="good__text-info">
            <p class="good__name">
                {{selectedGood.name}}
            </p>
            <p class="good__description">
                {{selectedGood.description}}
            </p>
            <div class="good__buy-item">
                <p class="good__price">
                    {{selectedGood.price}} $
                </p>
                <template v-if="!isGoodInCart">
                    <PriceCount
                            :val="count"
                            @update:val="count = $event"
                            @minus="minus"
                            @plus="plus"
                    ></PriceCount>
                    <button class="good__item" @click="addToCart(selectedGood)">
                        Buy
                    </button>
                </template>

                <router-link v-else  to="/cart/">
                    Good in cart &#10003;
                </router-link>
            </div>
        </div>
    </div>
    <p v-else class="good-load">
        Loading...
    </p>

</template>

<script>
    import PriceCount from '../components/PriceCount'
    import {mapState, mapGetters} from 'vuex';


    export default {
        name: "Good",
        props: ['name'],
        components: {
            PriceCount
        },
        data(){
          return {
              count: 1
          }
        },

        mounted(){
            this.$store.commit('clearAll');
        },
        created(){
           this.$store.dispatch('loadSelectedGood', {amount: this.nameWithSpaces})
        },
        methods: {
            minus(){
                this.count--;
            },
            plus(){
                this.count++;
            },
            addToCart(elem){
                this.$store.commit({
                    type: 'addToCart',
                    amount: {
                        ...elem,
                        count: this.count
                    }
                });
            },
        },
        computed: {

            nameWithSpaces(){
                return this.name.replace(/-/gm, ' ');
            },
            ...mapState([
                'selectedGood'
            ]),
            ...mapGetters([
                'getCart'
            ]),
            isGoodInCart(){
                return !!this.getCart.filter(el => el.id === this.selectedGood.id).length;
            }
       }
    }
</script>

<style lang="scss">
    .good-load{
        margin: 150px 0 0;
    }
    .good{
        width: 100%;
        max-width: 600px;
        background: lightcyan;
        margin: 150px auto 50px;
        text-align: left;


        img{
            width: 100%;
            height: auto;
            display: block;
        }
        .good__text-info{
            padding: 20px 20px 40px;
        }
        .good__name{
            font-weight: bold;
            font-size: 30px;
            line-height: 1.1;
            margin: 0 0 30px;
        }
        .good__description{

            font-size: 18px;
            line-height: 1.4;
            margin: 0 0 50px;
        }
        .good__buy-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                margin: 0;
            }
            .good__price{
                width: 50%;
                font-size: 20px;
                font-weight: bold;
                color: red;
            }
        }
    }
</style>