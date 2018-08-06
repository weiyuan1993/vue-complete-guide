<template>
    <div class="row">
        <form action="">
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label for="">Quote</label>
                <textarea v-model="quote" name="" id="" cols="30" rows="3" class="form-control"></textarea>
            </div>
                

            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNew" :disabled="!quote">Add Quote</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            quote: ''
        }
    },
    methods: {
        createNew() {
            this.$emit('quoteAdded', this.quote)
            this.quote = ''
        }
    }
}
</script>
<style>
</style>
