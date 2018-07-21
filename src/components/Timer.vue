<template>
    <div>
        <h1>{{ timeElapsed }}</h1>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['maxIntervalMiliseconds'],
    data() {
        return {
            elapsed: 0,
            timer: null
        }
    },
    computed: {
        timeElapsed() {
            var minutes = Math.floor(this.elapsed / 60000);
            var seconds = Math.floor((this.elapsed - minutes * 60000) / 1000);
            return pad(minutes, 2) + ":" + pad(seconds, 2);
        }
    },
    mounted() {
        eventBus.$on('stopTimer', this.stopTimer);
        eventBus.$on('startTimer', this.startTimer);
    },
    methods: {
        startTimer() {
            if (this.timer != null)
                return;
            var vm = this;
            var interval = 10;
            this.timer = setInterval(function() {
                vm.elapsed += interval
                if (vm.elapsed - interval < vm.maxIntervalMiliseconds * 0.25 && vm.elapsed >= vm.maxIntervalMiliseconds * 0.25)
                    eventBus.$emit('mileStone', 0.25);
                if (vm.elapsed - interval < vm.maxIntervalMiliseconds * 0.5 && vm.elapsed >= vm.maxIntervalMiliseconds * 0.5)
                    eventBus.$emit('mileStone', 0.5);
                if (vm.elapsed - interval < vm.maxIntervalMiliseconds * 0.75 && vm.elapsed >= vm.maxIntervalMiliseconds * 0.75)
                    eventBus.$emit('mileStone', 0.75);
                if (vm.elapsed >= vm.maxIntervalMiliseconds)
                {
                    vm.stopTimer();
                    eventBus.$emit('timerFinished');
                }
            }, interval);
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },
        resetTimer() {
            clearInterval(this.timer);
            this.timer = null;
            this.elapsed = 0; 
        }
    }
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
</script>

<style scoped>
    /* @import url('https://fonts.googleapis.com/css?family=Orbitron'); */
    /* @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono'); */
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
    h1 {
        /* font-family:'Orbitron', sans-serif; */
        /* font-family: 'Share Tech Mono', monospace; */
        font-family: 'Roboto Mono', monospace;
        display: inline
   }
   div {
    /* background: #fc0; */
    /* outline: 2px solid #000; */
    display: inline-block;
    padding: 5px;
    border: 3px solid;
    border-radius: 10px;
   }
</style>
