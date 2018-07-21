<template>
    <div id="main">
        <br/>
        <timer :maxIntervalMiliseconds="30000"/>
        <button @click="gotoNextLevel" v-if="timerFinished">Click me!</button>
        <plank-man/>
        <component :is="floatingTextComponent">{{ cheering }}</component>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
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
            floatingTextComponent: null,
            timerFinished: false,
            cheering: ''
        }
    },
    mounted() {
        eventBus.$on('mileStone', mileStone => this.showFloatingText(mileStone));
        eventBus.$on('timerFinished', this.openNextLevel);
    },
    methods: {
        showFloatingText(mileStone) {
            console.log(mileStone);
            if (mileStone == 0.25)
                this.cheering = 'Ты справишься!';
            else if (mileStone == 0.5)
                this.cheering = 'Половина пройдена!';
            else if (mileStone == 0.75)
                this.cheering = 'Осталось чуть-чуть!';
            this.floatingTextComponent = 'floating-text';
            var vm = this;
            setTimeout(function() {vm.floatingTextComponent = null}, 2000);
        },
        gotoNextLevel() {
            this.$router.push('/balls')
        },
        openNextLevel() {
            this.timerFinished = true;
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

