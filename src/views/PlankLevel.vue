<template>
    <div id="main">
        <!-- <h1>Скручиваний: {{absCount}}</h1>
        <button @click="gotoNextLevel" v-if="nextLevelUnlocked">Click me!</button> -->
        <div id="reversed">
            <plank-man/>
        </div>
    </div>
</template>

<script>
import PlankMan from '../components/PlankMan'

export default {
    name: "PlankLevel",
    components: {
        PlankMan
    },    
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

#reversed {
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    transform: scaleX(-1);    
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

