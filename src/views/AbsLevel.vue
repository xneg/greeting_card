<template>
    <div id="main">
        <br>
        <div id="label">
            <h1 class="unselectable">Скручиваний: {{absCount}}</h1>
        </div>
        <abs-man @show-floating-text="showFloatingText"></abs-man>
        <component :is="floatingTextComponent">{{ cheering }}</component>

        <modal-dialog 
        v-if="showModalDialog" 
        @close="showModalDialog = false"
        headerColor="rgb(46, 101, 241)">
            <h2 slot="header">Скручивания</h2>
            <p slot="body">Здесь всё просто. 20 скручиваний - это легко!</p>
        </modal-dialog>
        <next-button nextLevel="congrat" v-if="nextLevelUnlocked"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AbsMan from '../components/AbsMan'
import ModalDialog from '../components/ModalDialog'
import FloatingText from '../components/FloatingText'
import NextButton from '../components/NextButton'

export default {
    name: "AbsLevel",
    data() {
        return {
            showModalDialog: true,
            floatingTextComponent: null,
            cheering: ''
        }
    },
    components: {
        AbsMan,
        ModalDialog,
        FloatingText,
        NextButton
    },
    computed: {
        ...mapState({
            absCount: state => state.absCount,
        }),
        nextLevelUnlocked() {
            return this.absCount >= 20;
        }
    },
    methods: {
        showFloatingText(cheering) {
            this.cheering = cheering;
            this.floatingTextComponent = 'floating-text';
            var vm = this;
            setTimeout(function() {vm.floatingTextComponent = null}, 2000);
        }
    }
}
</script>

<style scoped>
#main {
    background: linear-gradient(rgb(46, 101, 241), rgb(22, 32, 58));
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
    border-color: white;
    color: white;
}

.floatingText {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 200px;
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
