<template>
    i phone " <b> {{  version }} </b> "
</template>

<script setup>

    const route = useRoute();
    const version = computed( () => {
        return route.params.version.replace("-" , ' ');
    })
</script>