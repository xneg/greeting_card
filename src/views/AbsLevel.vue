<template>
    <div id="main">
        <h1>Скручиваний: {{absCount}}</h1>
        <button @click="gotoNextLevel" v-if="nextLevelUnlocked">Click me!</button>
        <abs-man/>
        <button @click="showFloatingText">Click me</button>
        <component :is="floatingTextComponent">Какой-то текст.</component>

        <modal-dialog 
        v-if="showModalDialog" 
        @close="showModalDialog = false"
        headerColor="rgb(46, 101, 241)">
            <h2 slot="header">Скручивания</h2>
            <p slot="body">Здесь всё просто. 20 скручиваний - это легко!</p>
        </modal-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AbsMan from '../components/AbsMan'
import ModalDialog from '../components/ModalDialog'
import FloatingText from '../components/FloatingText'

export default {
    name: "AbsLevel",
    data() {
        return {
            showModalDialog: true,
            floatingTextComponent: null,
        }
    },
    components: {
        AbsMan,
        ModalDialog,
        FloatingText
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
        showFloatingText() {
            this.floatingTextComponent = 'floating-text';
            var vm = this;
            setTimeout(function() {vm.floatingTextComponent = null}, 2000);
        },
        gotoNextLevel() {
            this.$router.push('/congrat')
        },
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

    /* .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    } */
</style>
