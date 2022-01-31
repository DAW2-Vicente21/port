<template>
  <div class="home">
    <TableBaseAPI/>
    <ModalAdd/>
  </div>
</template>

<script>
import TableBaseAPI from '@/components/tableBaseAPI.vue'
import ModalAdd from '@/components/modalAdd.vue'
export default {
  name: 'Home',
  components: {
    TableBaseAPI,
    ModalAdd,
  }
}
</script>
