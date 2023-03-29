<template>
    <Nav />
    <Tab />
    <main>
        <router-view />
    </main>
</template>

<script>
    import Nav from '@/components/frontend/NavBar.vue'
    import Tab from '@/components/frontend/TabMenu.vue'
    export default {
        name: 'FrontendLayout',
        components: {
            Nav,
            Tab
        }
    }
</script>

<style lang="scss" scoped>

</style>