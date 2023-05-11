<template>
    <div class="nav">


        <ul>
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

<style lang="scss" scoped>
.nav {

    justify-content: center;
}

ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style-type: none;

    li {
        padding: 6px 0;

        a {
            position: relative;
            display: block;
            padding: 4px 0;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            transition: 0.5s;

            &::after {
                position: absolute;
                content: "";
                top: 100%;
                left: 0;
                width: 100%;
                height: 3px;
                background: white;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.5s;
            }

            &:hover {
                color: #acb0b0;
            }

            &:hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
}
</style>