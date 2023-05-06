<template>
    <Default>
        <div class="container">
            <h1>Progetti</h1>
        </div>
        <div class="container">
            <Projects />
        </div>
    </Default>
</template>
  
<script>

import Projects from '../components/Projects.vue';
import Default from '../layouts/Default.vue';
export default {
    components: {
        Projects,
        Default
    }

}
</script>
  
<style scoped></style>