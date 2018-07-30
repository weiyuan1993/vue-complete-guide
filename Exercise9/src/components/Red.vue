<template>
    <div>
        <slot></slot>
        <img @click="isChange = !isChange" :class="{change:isChange}" title="change" src="https://images.unsplash.com/photo-1486883946029-688a0f02d71f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5732bd0f6b653b6ef65a8af1b3e744df&auto=format&fit=crop&w=1500&q=80">
    </div>
</template>

<script>
export default {
    data() {
        return {
            isChange: false
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid red;
    background-color: lightcoral;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
}
img {
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;
}
.change {
    filter: brightness(3);
    border: 2px solid #ff2345;
    transform: scale(1.1);
    filter: saturate(2);
}
</style>