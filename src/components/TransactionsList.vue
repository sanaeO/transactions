<template>
    <section>
        <h3 class="text-[18px] font-bold">History</h3>
        <hr class="my-3">
        <template v-for="(item ,index) in items" :key="index">
            <TransactionVue :item="item"/>
        </template>
    </section>
</template>
<script>
import TransactionVue from './Transaction.vue';
import { ref } from 'vue';
export default {
  name:"TransactionsList",
  components:{TransactionVue},
  props:{
    items:{
        type:Array,
        required : true
    }
  },
}
</script>
<style scoped>

</style>
