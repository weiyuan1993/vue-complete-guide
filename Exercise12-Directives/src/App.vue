<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-highlight>v-highlight</p>
                <p v-highlight="'#f2cce2'">v-highlight set custom color</p>

                <p v-highlight:background="'#d14bb2'" style="color:black">v-highlight set custom arg for backgorund</p>
                <p v-highlight:background.delayed="'#514bb2'">v-highlight with modifier</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>
