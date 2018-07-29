<template>
    <div id="main" ref="container">
        <br>
        <div id="label">
            <h1 class="unselectable">Поймано: {{ballsClicked}}</h1>
        </div>
        <component :is="floatingTextComponent">{{ cheering }}</component>

        <modal-dialog 
            v-if="showModalDialog" 
            @close="onModalDialogClose"
            headerColor="rgb(150, 165, 201)">
            <h2 slot="header">Упражение с медболами</h2>
            <p slot="body">Попробуй поймать 20 медболов. Не так просто, как кажется!</p>
        </modal-dialog>
        <next-button nextLevel="abs" v-if="nextLevelUnlocked"/>
    </div>    
</template>

<script>
import Vue from 'vue'
import Ball from '../components/Ball'
import ModalDialog from '../components/ModalDialog'
import { mapGetters, mapState } from 'vuex'
import VueTouch from 'vue-touch';
import NextButton from '../components/NextButton'
import FloatingText from '../components/FloatingText'

Vue.use(VueTouch);

export default {
    name: "BallsLevel",
    components: {
        Ball,
        ModalDialog,
        NextButton,
        FloatingText
    },
    data: function() {
        return {
            timer: null,
            container: null,
            showModalDialog: true,
            floatingTextComponent: null
        }
    },
    computed: {
        ...mapState({
            ballsClicked: state => state.ballsClicked,
            ballsTotal: state => state.ballsTotal
        }),
        nextLevelUnlocked() {
            if (this.ballsClicked >= 20)
            {
                this.stopTimer();
                return true;
            }
            else
                return false;
        },
        cheering() {
            if (this.ballsClicked >= 15)
                return 'Осталось чуть-чуть!';
            if (this.ballsClicked >= 10)
                return 'Половина поймана!';
            if (this.ballsClicked >= 5)
                return 'Неплохо получается!';
        }
    },
    mounted() {
        this.container = this.$refs.container;
        window.addEventListener('focus', this.startTimer);
        window.addEventListener('blur', this.stopTimer);
    },
    methods : {
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
            instance.$on('clicked', this.showFloatingText);
            this.container.appendChild(instance.$el)
        },
        stopTimer: function() {
            clearInterval(this.timer);
            this.timer = null;
        },
        startTimer: function() {
            if (this.timer != null)
                return;
            var vm = this;
            this.timer = setInterval(function() {
                vm.addBall();
            }, 500);
        },
        onModalDialogClose() {
            this.showModalDialog = false;
            this.startTimer();
        },
        showFloatingText() {
            if (this.ballsClicked >= 20 || this.ballsClicked % 5 != 0)
                return;
            this.floatingTextComponent = 'floating-text';
            var vm = this;
            setTimeout(function() {vm.floatingTextComponent = null}, 2000);
        }
    } 
}
</script>

<style scoped>
#main {
    background: linear-gradient(rgb(150, 165, 201), rgb(83, 91, 112));
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

#label {
    display: inline-block;
    padding: 1px 30px;
    border: 3px solid;
    border-radius: 10px;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.floatingText {
    position: absolute;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    top: 200px;
}
</style>

