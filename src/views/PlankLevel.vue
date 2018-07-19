<template>
    <div id="main">
        <timer/>
        <!-- <h1>Скручиваний: {{absCount}}</h1>
        <button @click="gotoNextLevel" v-if="nextLevelUnlocked">Click me!</button> -->
        <plank-man/>
        <floating-text text="Ещё немного!" v-if="showFloatingText" class="floatingText"/>
        <button @click="showFloatingText = true">Click me</button>
    </div>
</template>

<script>
import PlankMan from '../components/PlankMan'
import FloatingText from '../components/FloatingText'
import Timer from '../components/Timer'

export default {
    name: "PlankLevel",
    components: {
        PlankMan,
        FloatingText,
        Timer
    },    
    data() {
        return {
            showFloatingText: false
        }
    }
}
</script>

<style scoped>
#main {
    background: linear-gradient(rgb(245, 88, 88), rgb(92, 24, 24));
    /* background-color: #6a7590ff;  */
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
}

body, html {
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
}

.floatingText {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 200px;
}

/* svg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width:350px;
} */

/* .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
} */
</style>

