<template>
    <div>
        <div class="flex justify-center w-full mt-20">
            <div class="grid grid-cols-2">
                <div>
                <img :src="`/images/iphone${route.params.version}.jpg`" />
                </div>
                <div class="text-center">
                <h1 class="text-3xl">Iphone {{ version }}</h1>
                <button @click="addToCart"
                    class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48"
                >
                    <span v-if="isInCart()">Remove From The Cart </span>
                    <span v-else> Buy Now</span>
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const cart = useCart(); 

    const route = useRoute();
    const version = computed( (cart) => {
        return route.params.version.replace("-" , ' ');
    })
    
    const fullName = computed( () => {
        return `iphone-${route.params.version}`
    })

    function isInCart(){
        return !!cart.value.find( (ct) => ct.name == fullName.value);
    }

    useHead({
        "title" : `IPhone ${version.value}` 
    })

    function addToCart(){
        if(!isInCart()){
            cart.value.push({
                name: fullName
            });
        }else{
            cart.value = cart.value.filter( (ct) => ct.name != fullName.value);
        }
        
    }
</script>