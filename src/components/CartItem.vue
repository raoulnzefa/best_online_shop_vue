<template>
    <div class="cart__item">
        <img :src="item.image" alt="">
        <div class="cart__item-text">
            <p class="cart__item-name">
                {{item.name}}
            </p>
            <div class="cart__item-price">
                <p class="cart__price-single">
                    Цена за шт: {{item.price}} $
                </p>
                <PriceCount  :val="item.count"
                             @minus="minus"
                             @plus="plus"
                ></PriceCount>
                <p class="cart__price-all">
                    Цена всего: {{item.count * item.price}} $
                </p>
            </div>
            <button class="cart__button-remove" @click="removeFromCart(item.id)">
                remove
            </button>
        </div>
    </div>
</template>

<script>
    import PriceCount from '../components/PriceCount'
    export default {
        name: "CartItem",
        props:{
            item: Object
        },
        data(){
          return {
              count: 1
          }
        },
        components: {
            PriceCount
        },
        methods: {
            removeFromCart(id){
                this.$store.commit({
                    type: 'removeFromCart',
                    amount: id
                })
            },
            minus(){
                this.$store.commit({
                    type: 'updateCartCount',
                    amount: {
                        id: this.$props.item.id,
                        count: -1
                    }
                })
            },
            plus(){
                this.$store.commit({
                    type: 'updateCartCount',
                    amount: {
                        id: this.$props.item.id,
                        count: 1
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .cart__item{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        margin: 20px;
        img{
            width: 20%;
            align-self: stretch;
        }
        .cart__item-text{
            width: 80%;
            margin: 0 0 0 30px;
            .cart__item-name{
                font-weight: bold;
                font-size: 20px;
                margin: 0 0 20px;
            }
            .cart__item-price{

                p{

                    font-size: 16px;
                }
                .cart__price-single{
                    margin: 0 0 20px;
                }
            }
        }
    }
</style>