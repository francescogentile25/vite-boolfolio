<template>
    <div>
        prova
        <p v-for="project in projects" :key="project.id">{{ project.title }}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    // console.log(res)
                    let result = res.data.results
                    this.projects = result
                    console.log(this.projects)
                })
        }
    },
    mounted() {
        this.fetchProjects()
    },
}
</script> 

<style lang="scss" scoped></style>