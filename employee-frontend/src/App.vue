<template>
    <div id="app">
        <EmployeeManager />
    </div>
</template>

<script>
    import EmployeeManager from './components/EmployeeManager.vue';

    export default {
        name: 'App',
        components: {
            EmployeeManager
        }
    };
</script>

<style>
    /* Optional styling */
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        padding: 2rem;
    }
</style>
