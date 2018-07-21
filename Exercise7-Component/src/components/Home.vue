<template>
    <div id="app">
        <div class="container">
            <Header/>
            <hr>
            <ServerStatus/>
            <hr>
            <Footer/>
        </div>
    </div>
</template>
<script>
import Header from "./Header.vue"
import ServerStatus from "./ServerStatus.vue"
import Footer from "./Footer.vue"

export default {
    components: {
        Header,
        ServerStatus,
        Footer
    }
};
</script>
