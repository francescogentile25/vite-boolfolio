<template>
    <div class="card">
        <router-link :to="`/project/${project.slug}`">
            <div class="card-body">

                <h5 class="card-title">{{ project.title }}</h5>
                <p class="text-primary">{{ project.type ? project.type.name : 'nessun tipo' }}</p>
                <ul class="p-0 m-0" v-if="project.technologies && project.technologies.length > 0">
                    <li class="badge rounded-pill text-bg-primary mx-1" v-for="technology in project.technologies"
                        :key="technology.id">{{ technology.name }}</li>
                </ul>
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped></style>