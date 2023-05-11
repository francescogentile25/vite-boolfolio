<template>
    <Default>
        <div class="container">
            <h1 class="text-center my-3">Home</h1>
            <template>
                <template>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div ref="myCarousel" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0"
                                            class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://via.placeholder.com/800x400.png?text=Slide+1"
                                                class="d-block w-100" alt="Slide 1">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://via.placeholder.com/800x400.png?text=Slide+2"
                                                class="d-block w-100" alt="Slide 2">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://via.placeholder.com/800x400.png?text=Slide+3"
                                                class="d-block w-100" alt="Slide 3">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                                        data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel"
                                        data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

            </template>

        </div>
    </Default>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Carousel } from 'bootstrap'
import Default from '../layouts/Default.vue';

export default {
    name: 'MyCarousel',
    components: {
        Default
    },
    setup() {
        const myCarousel = ref(null)

        onMounted(() => {
            new Carousel(myCarousel.value, {
                interval: 5000, // intervallo di scorrimento automatico in millisecondi (facoltativo)
                keyboard: true, // abilita la navigazione con la tastiera (facoltativo)
                pause: 'hover' // pausa l'autoplay al passaggio del mouse sul carosello (facoltativo)
            })
        })

        return {
            myCarousel
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: white;
}
</style>

