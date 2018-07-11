<template>
    <div id="app" ref="container">
        <p>Balls clicked: {{ballsClicked}}</p>
    </div>    
</template>

<script>
import Vue from 'vue'
import Ball from '../components/Ball'
import { mapGetters, mapState } from 'vuex'

export default {
    name: "BallsLevel",
    components: {
        Ball
    },
    computed: {
        ...mapState({
        ballsClicked: state => state.ballsClicked
        })
    },
    methods : {
        addBall: function() {
            var ComponentClass = Vue.extend(Ball)
            var instance = new ComponentClass({
                parent: this
            })
            instance.$mount() // pass nothing
            this.$refs.container.appendChild(instance.$el)
        }
    },
    mounted: function() {
        var vm = this;
        setInterval(function() {
            vm.addBall();
        }, 500);
    }
}
</script>

<style scoped>
    body, html {
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
    }
</style>

