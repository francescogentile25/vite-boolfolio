<template>
    <div class="container ">


        <ul class="nav__menu">
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'chisono' }">Chi sono</router-link>
            </li>
            <li>
                <router-link to="/contacts">Contatti</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>