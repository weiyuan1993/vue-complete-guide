<template>
    <div class="row">
        <!-- 這邊用 @click.native 為的是要讓其子組件能被監聽到,
         Vue預設的 click 只會監聽到其組件，不像原生的DOM能夠監聽到子元素-->
        <app-quote v-for="(quote,index) in quotes" :key="index" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    </div>
</template>
<script>
import Quote from './Quote.vue'
export default {
    props: ['quotes'],
    methods: {
        deleteQuote(index) {
            this.$emit('deleteQuote', index)
        }
    },
    components: {
        appQuote: Quote
    }
}
</script>

<style>
</style>
