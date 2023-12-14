<template>
    <div>
        <div>
            profile
        </div>
    </div>
    <slot></slot>
</template>

<script setup>
definePageMeta({
    layout:"sidebar",
    middleware: ['auth'],
});
</script>