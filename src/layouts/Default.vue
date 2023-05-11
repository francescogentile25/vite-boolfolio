<template>
    <div class="color-style">
        <Navbar></Navbar>
        <main>
            <slot />
        </main>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
.color-style {
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    height: 100vh;
}
</style>