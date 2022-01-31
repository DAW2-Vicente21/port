<template>
    <div class="container pt-3 pe-4">
        <div class="row justify-content-end">
            <Button class="p-button-rounded p-button-success p-button-outlined" icon="pi pi-plus" @click="openModal" />
        </div>

        <Dialog header="New Entrie" v-model:visible="displayModal" :modal="true" :style="{width: '50vw'}">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <form @submit.prevent="add_user">
                            <h5 class="pb-1"> Name </h5>
                            <InputText id="title_entrie" type="text" v-model="new_user.name" />
                        </form>
                    </div>
                </div> 
            </div>
            <div class="container pt-2">
                <div class="row justify-content-end">
                    <div class="col-2">
                        <Button label="Save" class="p-button-primary"/>
                    </div>
                </div>    
            </div>
        </Dialog>
    </div>
</template>

<script>
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { mapMutations } from 'vuex'

export default {
    components: {
        Dialog,
        Button,
        InputText
    },
    data() {
        return {
            displayModal: false,
            new_user: {
                id: 11,
                name: ''
            },
        }
    },
    methods: {
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        ...mapMutations([
            'NEW_USER',
        ]),
        add_user: function() {
            this.NEW_USER(this.new_user)
            this.new_user = ''
            this.id++
        }
    }
};
</script>

<style scoped>
</style>