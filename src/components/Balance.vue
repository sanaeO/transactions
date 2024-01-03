<template>
    <section class="py-5">
        <span class="font-semibold text-[18px] uppercase">Your balance</span>
        <p class="text-[30px] font-bold">${{ total }}</p>
        <div class="flex justify-between shadow p-5 my-5 bg-white">
            <div class="w-[50%] border-r">
                <h4 class="font-semibold text-[16px] uppercase">Income</h4>
                <p class="text-green-500">${{ income }}</p>
            </div>
            <div class="">
                <h4 class="font-semibold text-[16px] uppercase">Expense</h4>
                <p class="text-red-500">${{ expense }}</p>
            </div>
        </div>
    </section>
</template>
<script>

export default {
 name:"BalanceVue",
 props:{
    total:{
    type:Number,
    required:true
    },
    income:{
        type:Number,
        required: true
    },
    expense:{
        type:Number,
        required: true
    }
}
}
</script>