<template>
    <div class="cart">
        <h1>
            Cart Page
        </h1>
        <div class="cart__wrapper" v-if="cart.length">
            <CartItem
                    v-for="item in cart"
                    :key="item.id"
                    :item="item"
            ></CartItem>

            <br>
            <br>
            <h2>
                Total price: {{getCartSum}}
            </h2>
        </div>
        <p v-else>
            You havent added anything yet
        </p>
    </div>


</template>

<script>
    import CartItem from '../components/CartItem';
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        mounted(){
            this.$store.commit('clearAll');
        },
        computed: {
            ...mapState({
                cart: 'cart'
            }),
            ...mapGetters([
                'getCartSum'
            ])
        }
    }
</script>

<style lang="scss">
.cart{
    margin: 150px 0 0;
}
</style>