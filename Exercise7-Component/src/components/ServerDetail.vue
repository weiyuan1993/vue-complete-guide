<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{details}}</p>
    </div>
</template>
<script>
export default {
    props: {
        details: {
            type: String,
            default: 'Default detail'
        }
    }
}
</script>