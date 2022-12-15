<template>
    <div>
        <pageTopper/>
        <h1>about us</h1>
        <router-link to="/restReg">Register Your Restaurant here</router-link>

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

</style>