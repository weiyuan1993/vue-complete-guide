<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server 
                v-for="server in servers"
                :server="server"
                :key="server.id"
            ></app-server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'
export default {
    data() {
        return {
            servers: [
                { id: 1, status: 'Network is busy🙁' },
                { id: 2, status: 'This server maybe is broken😭' },
                { id: 3, status: 'The server is idle, try to invite more people to join😊' },
                { id: 4, status: 'The best server🤣' },
                { id: 5, status: 'Please buy more storage!😤' }
            ]
        }
    },
    components: {
        appServer: Server
    }
}
</script>

<style>
</style>
