<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <nuxt-link 
        v-for="iphone in iphones" :key="iphone"
            :to="`/iphones/${iphone}`" class="shadow-lg border rounded-lg text-center">
            <h1 class="p-3">{{  iphone }}</h1>
            <div class="flex justify-center p-2">
                <img width="200" :src="`/images/${iphone}.jpg`">
            </div>

        </nuxt-link>
        <!-- <nuxt-link to="/iphones/iphone-15-pro" class="shadow-lg border rounded-lg  text-center">
            <h1 class="p-3">Iphone 15</h1>
            <div class="flex justify-center p-2">
                <img width="200" src="/images/iphone15-pro.jpg">
            </div>
        </nuxt-link> -->
    </div>
</template>

<script setup>
    useHead({
        "title" : "Nuxt3 - Iphones"
    })


    const iphones = [
        'iphone-12' ,
        'iphone-12-pro' ,
        'iphone-13' ,
        'iphone-13-pro' ,
        'iphone-14' ,
        'iphone-15-pro' ,
        ] ;

        // the below will be used if i want to use backend
    // const {data} = useFetch("/api/iphones"  );
    // const iphones = data
</script>