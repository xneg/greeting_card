<template>
    <div id="main">
        <happy-birthday-label class="middle"/>
        <nadia class="nadia"/>
    </div>
</template>

<script>
import Nadia from '../components/Nadia'
import HappyBirthdayLabel from '../components/HappyBirthdayLabel'

export default {
    components: {
        Nadia,
        HappyBirthdayLabel
    }    
}
</script>

<style scoped>
    #main {
        background-color: #6a7590ff; 
        position:fixed;
        width:100%;
        height:100%;
        top:0px;
        left:0px;
    }

    .middle {
        position: relative;
        top: 0%;
        transform: translateY(50%);
    }

    .nadia {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
</style>
