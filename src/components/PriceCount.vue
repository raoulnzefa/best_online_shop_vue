<template>
    <div class="count" :class="[ viewStyle === 'cart-style' ? 'count_cart' : null]">
        <button class="count__minus" @click.prevent="val > 1 ? $emit('minus') : null">
            <i class="fas fa-minus"></i>
        </button>
        <input type="text" :value="val">
        <button class="count__plus" @click.prevent="$emit('plus')">
            <i class="fas fa-plus"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: "PriceCount",
        emits:['plus', 'minus'],
        props:{
            viewStyle: String,
            val: Number
        },
        data(){
            return {
                count: 1
            }
        },
    }
</script>

<style lang="scss">
    .count{
        margin: 0 0 15px;
        &.count_cart{
            input{
                width: 30px;
                height: 30px;
                padding: 3px;
                text-align: center;
            }
            button{
                height: 30px;
            }
        }
        input{
            width: 70px;
            height: 40px;
            padding: 3px 5px;
            text-align: center;
            pointer-events: none;
        }
        button{
            height: 40px;
        }
    }
</style>