<template>
    <div>
        <pageTopper/>
        <img src="https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg?w=2000" alt="background Img">
        <p>test</p>
        <router-link to="/restReg">click here</router-link>
        
    </div>
</template>

<script>
import pageTopper from '@/components/pageTopper';

    export default {
        name : "welcomePage",
        components: {
            pageTopper
        }
    }
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 10px;
}
</style>