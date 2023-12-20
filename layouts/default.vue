<template>
    

    <NavBar></NavBar>

    <slot></slot>
</template>
<script setup>
    const { session, refresh, update, reset } = await useSession();
    const auth = useAuth();

    onMounted(() => {
        if(session.value && session.value.isAuthenticated){
            auth.value.isAuthenticated = true;
        }
    });

    

</script>
