<template>
    <div width=100%>
        <br/>
        <happy-birthday-label/>
        <nadia/>
        <!-- <button>Cluck me!</button> -->
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
    div {
        background-color: #6a7590ff; 
        position:fixed;
        width:100%;
        height:100%;
        top:0px;
        left:0px;
    }
</style>
