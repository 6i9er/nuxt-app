<template>
    <nav class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between">
        <div class="flex ">
            <NuxtLink class="mr-4" to="/">Home</NuxtLink>
            <NuxtLink class="mr-4" to="/about">About</NuxtLink>
            <NuxtLink class="mr-4" to="/iphones">IPhones</NuxtLink>
            <p> Cart ({{  cart.length }})</p>
            <p> Total Pages Visited : {{  totalRouteCount }}</p>
        </div>

        <div v-if="auth.isAuthenticated" >
            <NuxtLink to="/profile">Profile</NuxtLink>
            <button class="ml-4" href="javascript:void(0)" v-if="auth.isAuthenticated" @click="logout">Logout</button>
        </div>
        
        <NuxtLink  v-else="!auth.isAuthenticated" to="/login">Login</NuxtLink>
    </nav>
    
</template>

<script setup>
    const cart = useCart();
    const auth = useAuth();
    const  totalRouteCount = usePageVisitCount();

    function logout(){
        auth.value.isAuthenticated = false;
    }
</script>