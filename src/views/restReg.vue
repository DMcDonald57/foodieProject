<template>
    <div>
        <pageTopper/>
        <h1>restaurant registration</h1>
        <router-link to="/">welcomePage</router-link>
    </div>
</template>

<script>
import pageTopper from '@/components/pageTopper';
    export default {
        name: "restReg",
        components: {
            pageTopper
        }
    }
</script>

<style scoped>

</style>