<template>
    <section class="mt-8">
        <h3 class="text-[18px] font-bold">Add Transaction : </h3>
        <hr class="my-3">
        <form @submit.prevent="onSubmit">
            <label class="block py-2">Text</label>
            <input type="text" v-model="name" class="w-full px-3 py-1 outline-none border" placeholder="Enter text ..." />
            <label class="block py-2">Amount<br/>
            (positive : income , negative : expense)</label>
            <input type="text" v-model="cost" class="w-full px-3 py-1 outline-none border" placeholder="Enter amount ..." />
            <input type="submit" value="Add transaction" class="bg-[#9c88ff] text-white text-center w-full py-2 mt-4 cursor-pointer"/>
        </form>
    </section>
</template>
<script>

import { ref } from 'vue'
import { useToast } from "vue-toastification"
export default {
    name:"AddTransactionVue",
    emits:["createTransaction"],
    setup(_, { emit }) {
        const name = ref('')
        const cost = ref(null)
        const toast = useToast()
        const onSubmit = ()=> {
            if(!name.value || !cost.value)
            {
                toast.error("Both fiels must be filled !")
            }
           else{
           const newTransaction = {id: Math.floor(Math.random() * 100000), name:name.value , cost:+cost.value}
           emit("createTransaction", newTransaction);
           toast.success("Transaction Add !")
            name.value=""
            cost.value= null
          }
        }
        return {name , cost , onSubmit}
    },
}
</script>
<style scoped>

</style>
