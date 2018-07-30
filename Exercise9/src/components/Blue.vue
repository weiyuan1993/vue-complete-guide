<template>
    <div>
        <h1>Ocean</h1>
        <slot></slot>
        <img title="click to turn gray!" @click="turnToGray" :class="{gray:turnGray}" src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=225513764be638b97f04b5ae0c53868e&auto=format&fit=crop&w=1790&q=80"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            turnGray: false
        }
    },
    methods: {
        turnToGray() {
            this.turnGray = !this.turnGray
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid blue;
    background-color: lightblue;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
}
img {
    width: 80%;
    cursor: pointer;
    transition: all 0.5s;
}
.gray {
    filter: grayscale(100%);
}
</style>