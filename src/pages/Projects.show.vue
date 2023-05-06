<template>
    <Default>
        <template v-if="project">
            <div class="container">
                <h3>{{ project.title }}</h3>
                <img v-if="project.cover_image" :src="project.cover_path" alt="">
                <p>{{ project.description }}</p>
                <p v-if="project.type">{{ project.type.name }}</p>
                <ul class="p-0 m-0">
                    <li class="badge rounded-pill text-bg-primary mx-1" v-for="technology in project.technologies"
                        :key="technology.slug">{{ technology.name }}</li>
                </ul>


            </div>
            <div class="container" v-if="relatedProject.length > 0">
                <ul class="correlated">
                    <li v-for="related in relatedProject" :key="related.id">
                        <ProjectCard :project="related"></ProjectCard>
                    </li>
                </ul>
            </div>

        </template>
    </Default>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import Default from '../layouts/Default.vue';
export default {
    components: {
        ProjectCard,
        Default
    },
    data() {
        return {
            project: null
        }
    },
    props: ['slug'],
    components: {
        Default,
        ProjectCard
    },
    computed: {
        relatedProject() {
            if (this.project.type) {
                return this.project.type.projects
            }
            return []
        }
    },
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
    beforeRouteUpdate(to, from) {
        const newSlug = to.params.slug
        this.fetchProjects(newSlug)
    },
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style lang="scss" scoped>
.correlated {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);
}
</style>