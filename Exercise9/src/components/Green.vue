<template>
    <div>
        <h2>Montain</h2>
        <slot></slot>
        <img title="click to rotate!" @click="rotate" :class="{rotate:isRotate}" src="https://images.unsplash.com/photo-1505299916137-b69793a66907?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d30e32d7d5841acee153205743f7a1ca&auto=format&fit=crop&w=2850&q=80" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isRotate: false
        }
    },
    methods: {
        rotate() {
            this.isRotate = !this.isRotate
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid green;
    background-color: lightgreen;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
}
img {
    width: 100%;
    cursor: pointer;

    transition: all 0.5s;
}
.rotate {
    transform: rotate(-10deg);
}
</style>