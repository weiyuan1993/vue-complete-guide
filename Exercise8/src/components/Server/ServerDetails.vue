<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <p># {{server.id}} : {{server.status}}</p>
            <button @click="resetServer">Reset</button>
        </div>
        <p v-else>Please select a server.</p>
    </div>

</template>

<script>
import { serverBus } from '../../main'
export default {
    data() {
        return {
            server: null
        }
    },
    // vue instance created
    created() {
        serverBus.$on('serverSelected', server => {
            this.server = server
        })
    },
    methods: {
        resetServer() {
            // 因為 object 在 JS 是拿到參考(call by reference)，所以此處修改 server 的值其實就是修改原始值
            this.server.status = 'Server is normal running'
        }
    }
}
</script>

<style>
</style>
