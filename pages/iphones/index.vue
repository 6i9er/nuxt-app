<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <nuxt-link to="/iphones/iphone-12" class="shadow-lg border rounded-lg text-center">
            <h1 class="p-3">Iphone 12</h1>
            <div class="flex justify-center p-2">
                <img width="200" src="/images/iphone12.jpg">
            </div>

        </nuxt-link>
            <nuxt-link to="/iphones/iphone-15-pro" class="shadow-lg border rounded-lg  text-center">
            <h1 class="p-3">Iphone 15</h1>
            <div class="flex justify-center p-2">
                <img width="200" src="/images/iphone15-pro.jpg">
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
    useHead({
        "title" : "Nuxt3 - Iphones"
    })
</script>