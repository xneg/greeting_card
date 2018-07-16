<template>
    <div id="main">
        <h1>Скручиваний: {{absCount}}</h1>
        <button @click="gotoNextLevel" v-if="nextLevelUnlocked">Click me!</button>
        <abs-man/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AbsMan from '../components/AbsMan'

export default {
    name: "AbsLevel",
    components: {
        AbsMan
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
        gotoNextLevel() {
            this.$router.push('/balls')
        },
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

    /* .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    } */
</style>
