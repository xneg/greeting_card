<template>
    <div id="app" ref="container">
        <p class="unselectable">Balls clicked: {{ballsClicked}}</p>
        <svg width="400" height="110" v-touch:tap="alert">
            <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>
        <button @click="alert">Click me!</button>
    </div>    
</template>

<script>
import Vue from 'vue'
import Ball from '../components/Ball'
import { mapGetters, mapState } from 'vuex'
import VueTouch from 'vue-touch';

Vue.use(VueTouch);

export default {
    name: "BallsLevel",
    components: {
        Ball
    },
    data: function() {
        return {
            timer: null
        }
    },
    computed: {
        ...mapState({
            ballsClicked: state => state.ballsClicked,
            ballsTotal: state => state.ballsTotal
        })
    },
    methods : {
        alert: function() {
            alert("Alert!");
        },
        addBall: function() {
            if (this.ballsTotal > 10)
                return;
            var ComponentClass = Vue.extend(Ball)
            var instance = new ComponentClass({
                parent: this
            })
            instance.$mount() // pass nothing
            this.$refs.container.appendChild(instance.$el)
        },
        stopTimer: function() {

        },
        startTimer: function() {
            var vm = this;
            this.timer = setInterval(function() {
                vm.addBall();
            }, 500);
        }
    },
    mounted: function() {
        window.addEventListener('focus', this.startTimer);
        window.addEventListener('blur', this.stopTimer);
        this.startTimer();
    }
}

</script>

<style scoped>
    body, html {
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>

