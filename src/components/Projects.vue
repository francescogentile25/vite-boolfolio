<template>
    <div class="projects">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
    </div>
    <ul class="d-flex gap-2 flex-wrap align-items-center justify-content-center">
        <li :class="['text-success', link.active ? 'text-danger' : '']" v-for="link  in links"
            @click="fetchPostsByUrl(link.url)" :key="link.label" v-html="link.label">
        </li>
    </ul>
</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'
export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            lastPage: 0,
            currentPage: 1,
            links: [],
        }
    },
    methods: {
        fetchProjects(page) {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
                .then(res => {
                    // console.log(res)
                    let result = res.data.results
                    this.links = result.links
                    this.lastPage = result.last_page
                    this.projects = result.data
                    // console.log(this.projects)
                    this.curentPage = result.curent__page
                })
        },
        fetchPostsByUrl(url) {
            axios.get(url)
                .then(res => {
                    let result = res.data.results
                    this.links = result.links
                    this.lastPage = result.last_page
                    this.projects = result.data
                    this.currentPage = result.current_page
                })
        }
    },
    mounted() {
        this.fetchProjects(this.currentPage)
    },
}
</script> 

<style lang="scss" scoped>
.projects {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);
}
</style>