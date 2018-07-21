<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                    class="list-group-item"
                    v-for="index in 5"
                    :key='index'
                    @click="showDetail(index)"
                    :class="{active:nowIndex ==index}">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <ServerDetail :details="details[nowIndex]"/>
    </div>
</template>
<script>
import ServerDetail from './ServerDetail.vue'
export default {
    components: {
        ServerDetail
    },
    data() {
        return {
            details: [
                'Choose server to check detail',
                'Network is busy🙁',
                'This server maybe is broken😭',
                'The server is idle, try to invite more people to join😊',
                'The best server🤣',
                'Please buy more storage!😤'
            ],
            nowIndex: 0
        }
    },
    methods: {
        showDetail(index) {
            this.nowIndex = index
            this.details[this.nowIndex] = `This is server ${index}'s detail, ${this.details[[this.nowIndex]]}`
        }
    }
}
</script>
<style scoped>
li {
    cursor: pointer;
}
li:hover,
.active {
    background-color: #faa123 !important;
    color: #fff !important;
}
</style>
