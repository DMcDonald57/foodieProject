<template>
    <div>
        <pageTopper/>
        <h1>test welcomepage</h1>
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

</style>