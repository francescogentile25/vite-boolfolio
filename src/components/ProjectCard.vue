<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card'scontent.
            </p>
        </div>
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