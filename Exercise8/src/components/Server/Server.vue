<template>
    <li
        class="list-group-item"
        @click="selectServer(server)"
    >
        Server #{{ server.id }}
    </li>
</template>
<script>
import { serverBus } from '../../main'
export default {
    props: ['server'],
    methods: {
        selectServer(server) {
            serverBus.$emit('serverSelected', server)
        }
    }
}
</script>
<style scoped>
li {
    cursor: pointer;
}
</style>

