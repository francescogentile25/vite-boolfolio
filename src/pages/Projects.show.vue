<template>
    <template v-if="project">
        <div class="container">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p v-if="project.type">{{ project.type.name }}</p>
            <ul class="p-0 m-0">
                <li class="badge rounded-pill text-bg-primary mx-1" v-for="technology in project.technologies"
                    :key="technology.slug">{{ technology.name }}</li>
            </ul>


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
        fetchProjects(slug) {
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
                .then(res => {
                    const { success, project } = res.data
                    if (success) {
                        this.project = project
                    } else {
                        this.$router.replace({ name: '404' })
                    }
                })
        }
    },
    created() {
        this.fetchProjects(this.slug)
    },
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style lang="scss" scoped></style>