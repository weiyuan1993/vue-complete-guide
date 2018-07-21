<template>
    <div id="app">
        <div class="container">
            <Header/>
            <hr>
            <ServerStatus/>
            <hr>
            <div class="row">
                <div class="col-xs-12">
                    <footer>
                        <p>All Servers are managed here</p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "./Header.vue"
import ServerStatus from "./ServerStatus.vue"
export default {
    components:{
        Header,
        ServerStatus  
    }
}
</script>
