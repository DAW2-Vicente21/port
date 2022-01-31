<template>
    <div class="container">
        <div class="row">
            <DataTable :value="all_users" :paginator="true" :rows="5"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            showGridlines stripedRows>
                <Column header="Edit" headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                    <template #body>
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-info p-button-outlined"/>
                    </template>
                </Column>
                <Column header="Delete" headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                    <template #body="slotProps">
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-outlined" @click="confirmDeleteUser(slotProps)"/>
                    </template>
                </Column>
                <Column header="Id" field="id" :sortable="true"> 
                </Column>
                <Column header="Name" field="name" :sortable="true"> 
                </Column>
            </DataTable>
        </div>
    </div>

    <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <span v-if="user">Are you sure you want to delete <b>{{user.data.name}}</b>?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteUser" />
        </template>
    </Dialog>

</template>

<script> 
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { mapMutations } from 'vuex'


export default {
    name: 'TableBaseAPI',
    components: {
        DataTable,
        Column,
        Button,
        Dialog
    },
    data() {
        return {
            id: '',
            user: {},
            deleteProductDialog: false,
        }
    },
    created() {
        this.$store.dispatch('load_users')
    },
    computed: {
        all_users: function() {
            return this.$store.getters.get_all_users
        }
    },
    methods: {
        ...mapMutations([
            'DELETE_USER',
        ]),
        delete_user: function() {
            console.log(this.user.data.id)
            this.DELETE_USER(this.user.data.id)
        },
        confirmDeleteUser(user) {
            this.user = user;
            this.deleteProductDialog = true;
        },
        deleteUser() {
            this.delete_user()
            this.id = ''
            this.deleteProductDialog = false;
        },
    }

}
</script>

<style  scoped>

</style>