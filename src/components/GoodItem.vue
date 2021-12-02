<template>
    <div class="good-item">

        <router-link  :to="{ name: 'good', params: { name: good.name.replace(/\s/gm, '-')} }">
            <img :src="good.image" alt="">
        </router-link>
        <div class="good-item__text-info">
            <p class="good-item__name">
                {{good.name}}
            </p>

            <div class="good-item__buy-item">
                <p class="good-item__price">
                    {{good.price}} $
                </p>
                <div class="good-item__buy-block">
                    <template v-if="!isGoodInCart">
                        <PriceCount
                                :val="count"
                                @update:val="count = $event"
                                @minus="minus"
                                @plus="plus"
                        ></PriceCount>
                        <button  class="good-item__btn-buy" @click="addToCart(good)">
                            Buy
                        </button>
                    </template>

                    <router-link v-else  to="/cart/">
                        Good in cart &#10003;
                    </router-link>

                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import PriceCount from '../components/PriceCount';
    import {mapGetters} from 'vuex';
    import { useToast } from "vue-toastification";

    export default {
        name: "GoodItem",
        components: {
            PriceCount
        },
        data(){
            return {
                count: 1,
            }
        },
        props: {
            good: Object
        },
        methods: {

            addToCart(elem){
                this.$store.commit({
                    type: 'addToCart',
                    amount: {
                        ...elem,
                        count: this.count
                    }
                });
                const toast = useToast();
                toast.success("Added to cart!", {
                    position: "bottom-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            },
            minus(){
                this.count--;
            },
            plus(){
                this.count++;
            }
        },
        computed: {
            ...mapGetters([
                'getCart'
            ]),
            isGoodInCart(){
                return !!this.getCart.filter(el => el.id === this.good.id).length;
            }
        }

    }
</script>

<style lang="scss">
    .good-item{
        width: 100%;
        max-width: 600px;
        background: lightcyan;
        margin: 0 auto 50px;
        text-align: left;


        img{
            width: 100%;
            height: auto;
            display: block;
        }
        .good-item__text-info{
            padding: 20px 20px 40px;
        }
        .good-item__name{
            font-weight: bold;
            font-size: 30px;
            line-height: 1.1;
            margin: 0 0 30px;
        }
        .good-item__description{

            font-size: 18px;
            line-height: 1.4;
            margin: 0 0 50px;
        }
        .good-item__buy-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                margin: 0;
            }
            .good-item__price{
                width: 50%;
                font-size: 20px;
                font-weight: bold;
                color: red;
            }
        }

    }
</style>