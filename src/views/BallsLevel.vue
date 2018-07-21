<template>
    <div id="main" ref="container">
        <h1 class="unselectable">Медболов поймано: {{ballsClicked}}</h1>
        <button @click="gotoNextLevel" v-if="nextLevelUnlocked">Click me!</button>

        <modal-dialog v-if="showModalDialog" @close="onModalDialogClose">
            <h3 slot="header">Упражение с медболами</h3>
            <p slot="body">Попробуй поймать 20 медболов. Не так просто, как кажется!</p>
        </modal-dialog>
    </div>    
</template>

<script>
import Vue from 'vue'
import Ball from '../components/Ball'
import ModalDialog from '../components/ModalDialog'
import { mapGetters, mapState } from 'vuex'
import VueTouch from 'vue-touch';

Vue.use(VueTouch);

export default {
    name: "BallsLevel",
    components: {
        Ball,
        ModalDialog
    },
    data: function() {
        return {
            timer: null,
            container: null,
            showModalDialog: true
        }
    },
    computed: {
        ...mapState({
            ballsClicked: state => state.ballsClicked,
            ballsTotal: state => state.ballsTotal
        }),
        nextLevelUnlocked() {
            return this.ballsClicked >= 20;
        }
    },
    methods : {
        gotoNextLevel() {
            this.stopTimer();
            this.$router.push('/abs')
        },
        addBall: function() {
            if (this.ballsTotal > 10)
                return;
            var ComponentClass = Vue.extend(Ball)
            var instance = new ComponentClass({
                parent: this,
                propsData: { 
                    parentWidth: window.innerWidth,
                    parentHeight: window.innerHeight
                }
            })
            instance.$mount() // pass nothing
            this.container.appendChild(instance.$el)
        },
        stopTimer: function() {
            clearInterval(this.timer);
        },
        startTimer: function() {
            var vm = this;
            this.timer = setInterval(function() {
                vm.addBall();
            }, 500);
        },
        onModalDialogClose() {
            this.showModalDialog = false;
            this.startTimer();
        },
    },
    mounted() {
        this.container = this.$refs.container;
        window.addEventListener('focus', this.startTimer);
        window.addEventListener('blur', this.stopTimer);
    }
}
</script>

<style scoped>
    #main {
        background: linear-gradient(#6a7590ff, rgb(83, 91, 112));
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

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>

