<template>
   <div :class='["bg-white shadow p-2 my-3 flex justify-between border-r-4" , item.cost > 0 ? "border-green-500" : "border-red-500"]'>
   <p>{{ item.name }}</p>
   <p :class="item.cost > 0 ? 'text-green-500' : 'text-red-500'">${{ item.cost }}</p>
  </div>
</template>
<script>
export default {
 name:"TransactionVue",
 props:{
    item: {
      type: Object, 
      required: true 
    }
 },
 setup()
 {

 }
}
</script>
<style scoped>

</style>
