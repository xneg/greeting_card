<template>
    <h2 ref="text" class="floatingText"><slot/></h2>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
export default {
    mounted() {
        var obj = this.$refs.text;
        TweenMax.fromTo(obj, 2, {scale: 0}, {y: "-=100", scale: 1})
        TweenMax.to(obj, 2, {opacity: 0, delay: 1.5 })
    }
}
</script>

<style scoped>
    .floatingText {
        color: white;
    }
</style>

