<template>
  <div class="max-w-[600px] bg-[#f7f7f7] m-auto my-10 border p-5 rounded-5">
    <HeaderVue />
    <BalanceVue :total="total" :income="income" :expense="expense"/>
    <TransactionsListVue :items="items"/>
    <AddTransactionVue @create-transaction="createTransaction" />
  </div>
</template>
<script>
import HeaderVue from '@/components/Header.vue';
import BalanceVue from './components/Balance.vue';
import TransactionsListVue from './components/TransactionsList.vue';
import AddTransactionVue from './components/AddTransaction.vue';
import { computed, ref } from 'vue';

export default{
  components : {HeaderVue , BalanceVue  , TransactionsListVue , AddTransactionVue},
  // emits : [createTransaction],
  setup()
{
  const items = ref([])
    // total
    const total = computed(()=> {
      return items.value.reduce((acc,item)=> {
        return acc + item.cost
      },0)
    })
      // Income
      const income = computed(()=> {
      return items.value.filter((item)=>item.cost>0).reduce((acc,item)=> {
        return acc + item.cost
      },0)
    })
      // Expense
      const expense = computed(()=> {
      return items.value.filter((item)=> item.cost<0).reduce((acc,item)=> {
        return acc + item.cost
      },0)
    })
  
    // createTransaction
   const createTransaction = (transaction) => {
      items.value = [...items.value , transaction]
    }

    return {items , total ,income , expense , createTransaction}
  }
}
</script>

<style lang="scss">
@import "./style.scss"
</style>