<template>
    <template v-if="project">
        <div class="container">
            DETTAGLI post
            <h1>{{ $route.params.slug }}</h1>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

        </div>

    </template>
</template>

<script>
import axios from 'axios';
export default {
    components: {},
    data() {
        return {
            project: null
        }
    },
    props: ['slug'],
    methods: {
        fetchProjects() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res => {
                    const { success } = res.data
                    if (success) {
                        this.project = project
                    } else {
                        this.$router.replace({ name: '404' })
                    }
                })
        }
    },
    created() {
        this.fetchProjects()
    },
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style lang="scss" scoped></style>