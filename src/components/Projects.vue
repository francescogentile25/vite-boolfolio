<template>
    <div>
        prova
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
        <ul>
            <li @click="fetchProjects(1)">1</li>
            <li @click="fetchProjects(2)">2</li>
        </ul>
    </div>
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
            projects: []
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
                    this.projects = result.data
                    // console.log(this.projects)
                })
        }
    },
    mounted() {
        this.fetchProjects(1)
    },
}
</script> 

<style lang="scss" scoped></style>