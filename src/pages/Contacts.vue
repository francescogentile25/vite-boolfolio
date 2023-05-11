<template>
    <Default>
        <div class="container">
            <section class="mx-4 text-light">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contattami</h2>
                <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur amet adipisci iste.</p>
                <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <div v-if="success">
                            mess inviato con successo
                        </div>
                        <form @submit.prevent="sendForm">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="" class="">Il tuo nome</label>
                                        <input v-model="name" type="text" name="name" class="form-control"
                                            :class="[errors && errors.name ? 'text-danger' : 'text-primary']">
                                        <p>caratteri rimasti: {{ 255 - name.length }}</p>
                                        <small v-if="errors && errors.name">
                                            <span v-for="error in errors.name" :key="error">{{ error }}</span>
                                        </small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="" class="">La tuam email</label>
                                        <input v-model="email" type="email" name="email" class="form-control"
                                            :class="[errors && errors.email ? 'text-danger' : 'text-primary']">
                                        <p>caratteri rimasti: {{ 255 - name.length }}</p>
                                        <small v-if="errors && errors.email">
                                            <span v-for="error in errors.email" :key="error">{{ error }}</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <label for="">Il tuo messaggio</label>
                                        <textarea v-model="message" type="text" id="" name="message" rows="2"
                                            class="form-control md-textarea"
                                            :class="[errors && errors.message ? 'text-danger' : 'text-primary']"></textarea>
                                        <small v-if="errors && errors.message">
                                            <span v-for="error in errors.message" :key="error">{{ error }}</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center text-md-left">
                                <button v-if="loading === false" class="btn btn-primary" type="submit">Invia</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-3 text-center d-flex flex-column justify-content-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Roma, Piazza Sabaudia 44 00171</p>
                            </li>
                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>327-4594446</p>
                            </li>
                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>francescogentile250893@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </Default>
</template>

<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';
export default {
    components: {
        Default
    },
    data() {
        return {
            name: '',
            email: '',
            message: '',
            success: false,
            errors: null,
            loading: false
        }
    },
    computed: {
        nameIsValid() {
            return this.name.trim() !== '' && this.name.trim().length <= 255
        },
        emailIsValid() {
            return this.email.trim() !== '' && this.email.trim().length <= 255
        },
        messageIsValid() {
            return this.message.trim() !== ''
        }
    },
    methods: {
        validate() {
            return this.nameIsValid && this.emailIsValid && this.messageIsValid
        },
        sendForm() {
            console.log('invio il form');
            if (this.validate() === false) {
                alert('compila il form')
                return
            }
            this.loading = true
            axios.post('http://127.0.0.1:8000/api/contacts', {
                name: this.name,
                email: this.email,
                message: this.message,
            }).then(res => {
                console.log(res.data)
                const { success, errors } = res.data
                this.success = success
                if (success) {
                    this.name = ''
                    this.email = ''
                    this.message = ''
                    this.errors = ''
                } else {
                    this.errors = errors
                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                this.loading = false
            })
        }
    }
}
</script>
  
<style  scoped></style>