<template>
    <div id="main">
        <div id="centered" class="middle">
            <happy-birthday-label/>
            <nadia class="nadia"/>
        </div>
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
        /* display: table-cell;
        vertical-align: middle; */
        position: relative;
        top: 0%;
        transform: translateY(50%);
    }

    /* #centered {
        position: fixed;
        top: 50%;
        left: 50%;
        width:100%;
        transform: translate(-50%, -50%);
    } */

    .nadia {
        position: fixed;
        top: -30px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
</style>
