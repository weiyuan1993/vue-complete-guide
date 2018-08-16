<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-local-maxhighlight:background.big="{flashTime:700,color1:'orange',color2:'purple'}">Crazy Directive</p>
                <p v-local-maxhighlight:background.small="{flashTime:300,color1:'aqua',color2:'green'}">Crazy Directive</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    'local-maxhighlight': {
      bind(el, binding, vnode) {
        const flashTime = binding.value.flashTime || 500
        const color1 = binding.value.color1 || 'yellow'
        const color2 = binding.value.color2 || 'pink'
        let currentColor = color1
        if (binding.modifiers['big']) {
          el.style.fontSize = '2em'
        } else if (binding.modifiers['small']) {
          el.style.fontSize = '0.8em'
        }
        setInterval(() => {
          currentColor == color2 ? (currentColor = color1) : (currentColor = color2)

          if (binding.arg === 'backgrond') {
            el.style.backgroundColor = currentColor
          } else {
            el.style.color = currentColor
          }
        }, flashTime)
      }
    }
  }
}
</script>

<style>
</style>
